import styled from "styled-components";
import Img, { ImageProps } from 'next/image'

const Style = styled(Img)`
  aspect-ratio: 1;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
`;

export default function LogoImage(props: ImageProps) {
  return <Style {...props} />;
}
