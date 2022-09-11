import FooterWhatsapp from "./FooterWhatsapp";
import FooterGithub from "./FooterGithub";
import FlexLine from "./Style/FlexLine";
import FooterWrapper from "./Style/FooterWrapper";

export default function Footer() {
  return (
    <footer>
      <FooterWrapper>
        <p>Sugestões ou problemas:</p>
        <FlexLine justifyContent="center">
          <FooterGithub />
          <FooterWhatsapp />
        </FlexLine>
      </FooterWrapper>
    </footer>
  );
}
