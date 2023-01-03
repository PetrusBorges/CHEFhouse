import { SvgXml } from 'react-native-svg';

export function Logo() {
  const markup = `<svg width="92" height="60" viewBox="0 0 92 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1V59H13.5V37.5H39.5V27H13.5V11.5H39.5V1H1Z" fill="white" stroke="white"/>
  <path d="M91.5 1V59H79V35H52V59H40V1H52V24H79V1H91.5Z" stroke="white"/>
  </svg>
  `;

  return <SvgXml xml={markup}/>;
}
