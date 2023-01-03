// Styled-components
import { Modal, FlatList } from 'react-native';
import { ModalBody, ContainerDetails, Image, Description, Button, ContentInfo, ImageInfo } from './styles';

// Components
import { Text } from '../text';

// Types
import { ChefsDetails } from '../../types/chefsDatils';
import { ChefsInfo } from '../../types/chefsInfo';

interface ChefsInfoModalProps {
  visible: boolean;
  onChefsInfoModalVisible: () => void;
  chefsDetails: null | ChefsDetails;
  chefsInfo: ChefsInfo[];
  onOrderModalInfo: (chefsId: string) => void;
}

export function ChefsInfoModal({ visible, onChefsInfoModalVisible, chefsDetails, chefsInfo, onOrderModalInfo }: ChefsInfoModalProps) {

  if (!chefsDetails) {
    return null;
  }

  return (

    <Modal
      visible={visible}
      onRequestClose={onChefsInfoModalVisible}
      animationType='slide'
      presentationStyle='pageSheet'
    >
      <ModalBody>
        <ContainerDetails>
          <Image
            source={{
              uri: `http://192.168.1.6:3001/uploads/${chefsDetails.imagePath}`
            }}
          />

          <Description>
            <Text color='#fff' weight='400' style={{ marginBottom: 10 }}>
              {chefsDetails.name}
            </Text>
            <Text color='#fff' weight='400'>
              {chefsDetails.description}
            </Text>
          </Description>
        </ContainerDetails>

        <Button onPress={() => onOrderModalInfo(chefsDetails._id)}>
          <Text color='#000' weight='400'>
            RESERVAR  👨‍🍳
          </Text>
        </Button>

        <FlatList
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20 }}
          data={chefsInfo}
          showsVerticalScrollIndicator={false}
          keyExtractor={chefsInfo => chefsInfo._id}
          renderItem={({ item: chefsInfo }) => {
            return (
              <ContentInfo>
                <ImageInfo
                  source={{
                    uri: `http://192.168.1.6:3001/uploads/${chefsInfo.imagePath}`
                  }}
                />
              </ContentInfo>
            );
          }}
        />
      </ModalBody>
    </Modal>
  );
}
