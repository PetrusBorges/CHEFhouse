import styled from 'styled-components/native';

export const ModalBody = styled.View`
  background-color: #000000;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.View`
  margin-top: 52px;
`;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.ImageBackground`
  width: 86px;
  height: 86px;
  overflow: hidden;
  border-radius: 43px;
`;

export const ContainerBackground = styled.View`
  width: 100%;
  height: 200px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background: rgba(204, 204, 204, 0.3);
  margin: 10px 0;
`;
