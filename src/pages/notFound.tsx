import PageDefault from "../components/PageDefault";
import A from "../components/Style/A";

export default function NotFound() {
  return (
    <PageDefault
      pageTitle="Não encontrado"
      userData={{
        name: "404",
      }}
    >
      <h2>Não encontrei essa página</h2>
      <A href="/">Voltar ao início</A>
    </PageDefault>
  );
}
