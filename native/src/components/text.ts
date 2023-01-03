import styled from 'styled-components/native';

interface TextProps {
  weight?: '200' | '400' | '600';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) => weight ? `Oxanium-${weight}` : 'Oxanium-200'};
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
`;
