import styled from "styled-components";

const Style = styled.img`
  display: block;
  height: 100%;
`;

export default function LogoImage(props: any & { src: string }) {
  const publicSrc =
    process.env.PUBLIC_URL + props.src || process.env.PUBLIC_URL;
  return <Style {...props} src={publicSrc} />;
}
