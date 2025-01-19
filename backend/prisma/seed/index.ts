import { PrismaClient } from '@prisma/client';
import words from './data/words.ts';
import type { Word } from './data/words.ts';
import users from './data/users.ts';
import type { User } from './data/users.ts';
import games from './data/games.ts';
import type { Game } from './data/games.ts';
import letters from './data/letters.ts';
import type { Letter } from './data/letters.ts';

const prisma = new PrismaClient();
const oldDatabase = new PrismaClient({
  datasourceUrl: 'postgres://default:PWLyNgVXKO14@ep-weathered-scene-84460545-pooler.us-east-1.postgres.vercel-storage.com/verceldb',
})

async function migrate() {
  async function getUsers(): Promise<{ rows: Array<User>; }> {

    try {
      const users = await oldDatabase.$queryRaw<Array<User>>`SELECT x.* FROM public."Users" AS x`
      console.info(`got ${users.length} users from DB`);
      return { rows: users };
    } catch {
      console.info(`got ${users.length} users from Cache`);
      return { rows: users };
    }
  }

  async function getWords(): Promise<{ rows: Array<Word> }> {
    try {
      const words = await oldDatabase.$queryRaw<Array<Word>>`SELECT x.* FROM public."Words" AS x`
      console.info(`got ${words.length} words from DB`);
      return { rows: words };
    } catch {
      console.info(`got ${words.length} words from Cache`);
      return { rows: words };
    }
  }

  async function getGames(): Promise<{ rows: Array<Game> }> {
    try {
      const games = await oldDatabase.$queryRaw<Array<Game>>`SELECT x.* FROM public."UserWords" AS x`
      console.info(`got ${games.length} games from DB`);
      return { rows: games };
    } catch (err) {
      console.info(`got ${games.length} games from Cache`);
      return { rows: games };
    }
  }

  async function getUsedLetters(): Promise<{ rows: Array<Letter> }> {
    try {
      const letters = await oldDatabase.$queryRaw<Array<Letter>>`SELECT x.* FROM public."TriedLetters" As x`;
      console.info(`got ${letters.length} letters from DB`);
      return { rows: letters };
    } catch {
      console.info(`got ${letters.length} letters from Cache`);
      return { rows: letters };
    }
  }

  const [
    Users,
    Words,
    Games,
    UsedLetters
  ] = await Promise.all([
    getUsers(),
    getWords(),
    getGames(),
    getUsedLetters(),
  ]);

  function removeAccents(word: string = '') {
    return word.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function replaceSpaces(word: string = '') {
    return word.replace(/\s{1,}/g, '_');
  }

  async function migrateHint() {
    const allHints = [...new Set(Words.rows.filter(word => typeof word.hint !== 'undefined').map(word => word.hint.trim()))];

    const targetHints = await prisma.hint.findMany({
      select: { text: true }
    }).then(data => data.map(data => data.text))

    const remainingHints = allHints.filter(hint => !targetHints.includes(hint));

    await Promise.all(remainingHints.map(hint => prisma.hint.create({
      data: {
        text: hint.toLowerCase().trim(),
        is_activated: true
      }
    })));

    console.info('Hint was successfully migrated');
  }

  async function migrateWords() {
    const allWords = [...new Set(Words.rows.filter(word => typeof word.word !== 'undefined').map(word => ({
      word: word.word.trim(),
      description: word.description,
      createdAt: word.createdAt,
      updatedAt: word.updatedAt,
    })))];

    const targetWords = await prisma.word.findMany({
      select: { text: true }
    }).then(data => data.map(data => data.text));

    const remainingWords = allWords.filter(word => !targetWords.includes(word.word));

    await Promise.all(remainingWords.map(word => prisma.word.create({
      data: {
        text: word.word.toLowerCase().trim(),
        description: word.description,
        created_at: word.createdAt,
        updated_at: word.updatedAt,
        is_activated: !!word.description,
      }
    })));

    console.info('Words was successfully migrated');
  }

  async function migrateWordsAndHintRelation() {
    const allWords: {
      word: string;
      hint: string;
      createdAt: Date;
      wordId?: string;
      hintId?: string;
    }[] = [...new Set(Words.rows.filter(word => typeof word.word !== 'undefined').map(word => ({
      word: word.word.trim(),
      hint: word.hint.trim(),
      createdAt: word.createdAt,
    })))];

    for (const word of allWords) {
      const wordId = await prisma.word.findFirst({
        select: { id: true },
        where: { text: word.word }
      }).then(data => data?.id);

      const hintId = await prisma.hint.findFirst({
        select: { id: true },
        where: { text: word.hint }
      }).then(data => data?.id);

      if (wordId && hintId) {
        allWords[allWords.findIndex(currentWord => currentWord.word === word.word && currentWord.hint === word.hint)] = {
          ...word,
          wordId,
          hintId,
        }
      }
    }

    const targetRelationships = await prisma.hintsWords.findMany({
      select: { hint_id: true, word_id: true }
    });
    const remainingRelationships = allWords.filter(word => !targetRelationships.some(relationship => relationship.hint_id === word.hintId && relationship.word_id === word.wordId));

    await Promise.all(remainingRelationships.map(relationship => prisma.hintsWords.create({
      data: {
        hint_id: relationship.hintId!,
        word_id: relationship.wordId!,
        created_at: relationship.createdAt,
      }
    })));

    console.info('Words and Hint relation was successfully migrated');
  }

  async function migrateUsers() {
    const allUsers = Users.rows.map(data => ({
      name: replaceSpaces(removeAccents((data.name).trim().toLowerCase())),
      password: data.password,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }));

    const targetUsers = await prisma.user.findMany({
      select: { username: true }
    }).then(data => data.map(data => data.username));

    const remainingUsers = allUsers.filter(user => !targetUsers.includes(user.name));

    await Promise.all(remainingUsers.map(user => {
      return prisma.user.create({
        data: {
          password: user.password,
          created_at: user.createdAt,
          is_activated: true,
          is_adm: user.name === 'renatobmps',
          is_guest: false,
          need_update_password: true,
          updated_at: user.updatedAt,
          username: user.name,
        }
      })
    }));

    console.info('Users was successfully migrated');
  }

  async function migrateGame() {
    const allGames = Games.rows.map(data => ({
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      attempts: data.initialLife - UsedLetters.rows.filter(letter => letter.idUserWords === data.id && letter.correct === false).length,
      isBeat: (data.initialLife - UsedLetters.rows.filter(letter => letter.idUserWords === data.id && letter.correct === false).length) > 0 && data.done === true,
      user: replaceSpaces(removeAccents(Users.rows.find(user => user.id === data.idUsers)?.name.trim().toLowerCase() ?? '')),
      word: Words.rows.find(word => word.id === data.idWords)?.word.trim() ?? '',
      id: data.id
    }));

    for (let i = 0; i < allGames.length; i++) {
      const data = allGames[i];

      const [user, word] = await Promise.all([
        prisma.user.findFirst({ select: { id: true }, where: { username: data.user } }),
        prisma.word.findFirst({ select: { id: true }, where: { text: data.word } }),
      ])

      allGames[i].user = user?.id ? user.id : data.user;
      allGames[i].word = word?.id ? word.id : data.word;
    }

    const targetGames = await prisma.game.findMany({ select: { user_id: true, word_id: true } });

    const remainingGames = allGames.filter(game => !targetGames.some(targetGame => targetGame.user_id === game.user && targetGame.word_id === game.word));

    await Promise.all(remainingGames.map(game => {
      return prisma.game.create({
        data: {
          attempts: game.attempts,
          created_at: game.createdAt,
          is_beat: game.isBeat,
          updated_at: game.updatedAt,
          user_id: game.user,
          word_id: game.word,
        }
      })
    }));

    console.info('Game was successfully migrated');
  }

  async function migrateGameLetters() {
    const allLetters = UsedLetters.rows.map(data => {
      const game = Games.rows.find(game => game.id === data.idUserWords);

      return ({
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        letter: data.letter.trim().toLowerCase(),
        isCorrect: data.correct,
        game: game?.id.toString(),
        user: replaceSpaces(removeAccents(
          Users.rows.find(user => user.id === game?.idUsers)?.name.trim().toLowerCase()
        )),
        word: Words.rows.find(word => word.id === game?.idWords)?.word,
      })
    });

    for (let i = 0; i < allLetters.length; i++) {
      const data = allLetters[i];

      const [user, word] = await Promise.all([
        prisma.user.findFirst({ select: { id: true }, where: { username: data.user } }),
        prisma.word.findFirst({ select: { id: true }, where: { text: data.word } }),
      ]);

      const game = await prisma.game.findFirst({ select: { id: true }, where: { user_id: user?.id, word_id: word?.id } })

      const gameId = (game?.id ? game.id : data.game)!;

      allLetters[i].game = gameId;
    }

    const targetLetters = await prisma.gameLetter.findMany({ select: { game_id: true } }).then(data => data.map(data => data.game_id))

    const remainingLetters = allLetters.filter(letter => !targetLetters.includes(letter.game!));

    await Promise.all(remainingLetters.filter(data => typeof data.game !== 'undefined').map(letter => {
      return prisma.gameLetter.create({
        data: {
          created_at: letter.createdAt,
          is_correct: letter.isCorrect,
          letter: letter.letter.toLocaleLowerCase().trim(),
          updated_at: letter.updatedAt,
          game_id: letter.game!,
        }
      })
    }));

    console.info("Game's letters was successfully migrated");
  }

  await Promise.all([
    migrateHint(),
    migrateWords(),
    migrateUsers(),
  ]);

  await Promise.all([
    migrateWordsAndHintRelation(),
    migrateGame(),
  ]);

  await Promise.all([
    migrateGameLetters(),
  ]);
}

migrate()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await oldDatabase.$disconnect();
  });

export default migrate;