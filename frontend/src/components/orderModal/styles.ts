import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: ${({ theme }) => theme.color[50]};
  width: 500px;
  padding: 16px;
  border-radius: 8px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 18px;
  }

  button {
    line-height: 0;
    border: none;
    background-color: transparent;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 18px;
  gap: 10px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background-color: ${({ theme }) => theme.color[500]};
    border-radius: 48px;
    border: none;
    color: ${({ theme }) => theme.color[50]};
    padding: 8px 24px;
  }

  .secondary {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color[500]};
    padding: 8px 24px;
    font-weight: bold;
  }
`;
