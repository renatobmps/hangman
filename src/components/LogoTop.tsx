import LogoAnchor from "./Style/LogoAnchor";
import LogoImage from "./Style/LogoImage";
import Logo from './media/icon.svg'

export default function LogoTop() {
  delete Logo.blurHeight;
  delete Logo.blurWidth;

  return (
    <LogoAnchor href="/">
      <LogoImage alt="Logo" {...Logo} />
    </LogoAnchor>
  );
}
