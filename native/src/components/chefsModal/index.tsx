// Styled-Components
import { Modal, FlatList } from 'react-native';
import { ModalBody, ContainerText, Container, Image, ContainerBackground, Separator } from './styles';

// Components
import { Text } from '../text';

// Images
import { BackGround } from '../../assets/images/backGround';

// Types
import { Chefs } from '../../types/chefs';

interface ChefsModalProps {
  visible: boolean;
  onChefsModalVisible: () => void;
  chefs: Chefs[];
  onChefsInfoModalVisible: (chefsId: string) => Promise<void>;
}

export function ChefsModal({ visible, onChefsModalVisible, chefs, onChefsInfoModalVisible }: ChefsModalProps) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onChefsModalVisible}
      animationType='slide'
      presentationStyle='pageSheet'
    >
      <ModalBody>
        <ContainerText>
          <Text color='#fff' weight='600' size={24}>
            Escolha seu chef preferido!
          </Text>
        </ContainerText>

        <FlatList
          ItemSeparatorComponent={Separator}
          contentContainerStyle={{ marginTop: 50 }}
          showsVerticalScrollIndicator={false}
          data={chefs}
          keyExtractor={chefs => chefs._id}
          renderItem={({ item: chefs }) => {
            return (
              <Container onPress={() => onChefsInfoModalVisible(chefs._id)}>
                <Image
                  source={{
                    uri: `http://192.168.1.6:3001/uploads/${chefs.imagePath}`
                  }}
                />

                <Text color='#fff' weight='600' size={24} style={{ marginLeft: 10 }}>
                  {chefs.name}
                </Text>
              </Container>
            );
          }}
        />
        <ContainerBackground>
          <BackGround />
        </ContainerBackground>
      </ModalBody>
    </Modal>
  );
}
