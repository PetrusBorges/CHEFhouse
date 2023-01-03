import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border: 1px solid #000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  gap: 10px;
`;

export const OrdersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  flex-wrap: wrap;
  gap: 20px;

  button {
    border: none;
    background-color: ${({ theme }) => theme.color[100]};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 12px 16px;

    strong {
      font-weight: 500;
      margin-bottom: 10px;
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }
`;
