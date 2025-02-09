import styled, { keyframes } from "styled-components";

const charging = keyframes`
  0%    {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 0%,   #d3d3d386 100%)}
  10%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 10%,  #d3d3d386 100%)}
  20%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 20%,  #d3d3d386 100%)}
  30%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 30%,  #d3d3d386 100%)}
  40%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 40%,  #d3d3d386 100%)}
  50%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 50%,  #d3d3d386 100%)}
  60%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 60%,  #d3d3d386 100%)}
  70%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 70%,  #d3d3d386 100%)}
  80%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 80%,  #d3d3d386 100%)}
  90%   {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 90%,  #d3d3d386 100%)}
  100%  {background: linear-gradient(80deg, #d3d3d386 0%, #80808091 100%, #d3d3d386 100%)}
`;

const Style = styled.div`
  animation: ${charging} 0.8s linear infinite;
  border-radius: 0.3rem;
  color: transparent;
  display: block;
  ${(props: { width: string; height: string }) => `
    height: ${props.height};
    width: ${props.width};
  `}
`;

export default function Loading(
  props: any & { height?: string; width?: string },
) {
  return (
    <Style
      {...props}
      height={props.height || "1.5rem"}
      width={props.width || "10rem"}
    />
  );
}
