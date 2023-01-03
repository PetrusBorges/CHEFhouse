import styled from 'styled-components/native';

export const ModalBody = styled.View`
  background-color: #000000;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
`;

export const Input = styled.TextInput`
  background-color: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 12px 16px;
  align-items: center;
  justify-content: center;
`;

export const ChefContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const Image = styled.ImageBackground`
  width: 84px;
  height: 84px;
  overflow: hidden;
  border-radius: 62px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  background-color: ${({ disabled }) => disabled ? '#999' : '#fff'};
  border-radius: 8px;
  padding: 12px 16px;
  align-items: center;
  justify-content: center;
`;
