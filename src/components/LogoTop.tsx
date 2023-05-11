import LogoAnchor from "./Style/LogoAnchor";
import LogoImage from "./Style/LogoImage";

export default function LogoTop() {
  return (
    <LogoAnchor href="/">
      <LogoImage src="/icon.svg" alt="Logo" />
    </LogoAnchor>
  );
}
