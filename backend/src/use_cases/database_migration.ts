import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

type User = {
  id: number;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

type Word = {
  id: number;
  word: string;
  hint: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

type Game = {
  id: number;
  idUsers: number;
  idWords: number;
  done: boolean;
  initialLife: number;
  createdAt: Date;
  updatedAt: Date;
}

type Letter = {
  id: number;
  letter: string;
  idUserWords: number;
  correct: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const config = {
  PG_USER: 'default',
  PG_HOST: 'ep-weathered-scene-84460545-pooler.us-east-1.postgres.vercel-storage.com',
  PG_DATABASE: 'verceldb',
  PG_PASSWORD: 'PWLyNgVXKO14',

  POSTGRES_USER: 'default',
  JWT_SECRET: 'ef40d12fc8295b69c1c76635a6f409ee',
  POSTGRES_HOST: 'ep-weathered-scene-84460545-pooler.us-east-1.postgres.vercel-storage.com',
  NEXT_PUBLIC_API_ENDPOINT: 'https://forca-renatobmps.vercel.app/api/v1',
  POSTGRES_URL: 'postgres://default:PWLyNgVXKO14@ep-weathered-scene-84460545-pooler.us-east-1.postgres.vercel-storage.com/verceldb',
  PG_URL: 'postgres://default:PWLyNgVXKO14@ep-weathered-scene-84460545-pooler.us-east-1.postgres.vercel-storage.com/verceldb',
  POSTGRES_PRISMA_URL: 'postgres://default:PWLyNgVXKO14@ep-weathered-scene-84460545-pooler.us-east-1.postgres.vercel-storage.com/verceldb?pgbouncer=true&connect_timeout=15',
  PG_PRISMA_URL: 'postgres://default:PWLyNgVXKO14@ep-weathered-scene-84460545-pooler.us-east-1.postgres.vercel-storage.com/verceldb?pgbouncer=true&connect_timeout=15',
  POSTGRES_URL_NON_POOLING: 'postgres://default:PWLyNgVXKO14@ep-weathered-scene-84460545       .us-east-1.postgres.vercel-storage.com/verceldb',
  PG_URL_NON_POOLING: 'postgres://default:PWLyNgVXKO14@ep-weathered-scene-84460545       .us-east-1.postgres.vercel-storage.com/verceldb',
  POSTGRES_PASSWORD: 'PWLyNgVXKO14',
  POSTGRES_DATABASE: 'verceldb',
  POSTGRES_DB: 'verceldb',
};

async function migrate() {
  const pool = new Pool({
    user: config.PG_USER,
    host: config.PG_HOST,
    database: config.PG_DATABASE,
    password: config.PG_PASSWORD,
    port: 5432,
    ssl: true,
  });

  const db = await pool.connect();

  const [
    Users,
    Words,
    Games,
    UsedLetters
  ] = await Promise.all([
    db.query<User>(`
      SELECT x.* FROM public."Users" x
    `),
    db.query<Word>(`
      SELECT x.* FROM public."Words" x
    `),
    db.query<Game>(`
      SELECT x.* FROM public."UserWords" x
    `),
    db.query<Letter>(`
      SELECT x.* FROM public."TriedLetters" x
    `),
  ]);

  console.log(JSON.stringify({
    users: Users.rows,
    games: Games.rows,
    letters: UsedLetters.rows,
    words: Words.rows,
  }, null, 2));

  const prisma = new PrismaClient({
    datasourceUrl: "postgresql://local_user:local_docker_password@localhost:5432/hangman?schema=public"
  });

  async function migrateHint() {
    const allHints = [...new Set(Words.rows.filter(word => typeof word.hint !== 'undefined').map(word => word.hint.trim()))];

    const targetHints = await prisma.hint.findMany({
      select: { text: true }
    }).then(data => data.map(data => data.text))

    const remainingHints = allHints.filter(hint => !targetHints.includes(hint));

    await Promise.all(remainingHints.map(hint => prisma.hint.create({
      data: {
        text: hint,
        isActivated: true
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
        text: word.word,
        description: word.description,
        created_at: word.createdAt,
        updated_at: word.updatedAt,
        isActivated: !!word.description,
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

  async function migrateGame() {
    console.info('Game was successfully migrated');
  }

  await Promise.all([
    migrateHint(),
    migrateWords(),
  ]);

  await Promise.all([
    migrateWordsAndHintRelation(),
    migrateGame(),
  ]);

  db.release();
  pool.end();
}

migrate();

export default migrate;