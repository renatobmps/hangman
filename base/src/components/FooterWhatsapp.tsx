import A from "./Style/A";

export default function FooterWhatsapp() {
  return (
    <A
      as="a"
      target="_blank"
      style={{
        color: "white",
      }}
      href="http://api.whatsapp.com/send?phone=5511947689391"
    >
      WhatsApp
    </A>
  );
}
