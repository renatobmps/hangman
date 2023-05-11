export function GameRankingTableHeader() {
  return (
    <thead>
      <tr>
        <th rowSpan={2}>#</th>
        <th rowSpan={2}>Usuário</th>
        <th rowSpan={2}>Pontos</th>
        <th colSpan={2}>Precisão</th>
      </tr>
      <tr>
        <th>Palavras</th>
        <th>Letras</th>
      </tr>
    </thead>
  );
}
