import styled from 'styled-components';

const Style = styled.img`
  aspect-ratio: 1;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
`;

export default function LogoImage(props: any) {
  return <Style {...props} />;
}
