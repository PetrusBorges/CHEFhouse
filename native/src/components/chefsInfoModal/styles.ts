import styled from 'styled-components/native';

export const ModalBody = styled.View`
  background-color: #000000;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerDetails = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.ImageBackground`
  width: 124px;
  height: 124px;
  overflow: hidden;
  border-radius: 62px;
`;

export const Description = styled.View`
  margin-left: 12px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 8px;
  padding: 12px 16px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const ContentInfo = styled.View`
  margin: 5px;
`;

export const ImageInfo = styled.ImageBackground`
  width: 180px;
  height: 180px;
  margin: 0 auto;
`;
