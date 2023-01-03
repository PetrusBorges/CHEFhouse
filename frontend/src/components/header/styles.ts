import styled from 'styled-components';

export const Container = styled.header`
  height: 198px;
  background-color: ${({ theme }) => theme.color[900]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: ${({ theme }) => theme.color[50]};
      font-size: 32px;
      font-weight: 400;
    }

    h2 {
      color: ${({ theme }) => theme.color[50]};
      font-size: 16px;
      font-weight: 200;
    }
  }
`;
