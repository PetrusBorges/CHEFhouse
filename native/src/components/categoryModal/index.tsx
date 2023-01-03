// Styled-Components
import { Modal, FlatList } from 'react-native';
import { ModalBody, ContainerText, CenteredContainer, Container, ImageContainer, Image } from './styles';

// Components
import { Text } from '../text';

// Types
import { Category } from '../../types/category';

interface CategoryModalProps {
  visible: boolean;
  onCategoryModalVisible: () => void;
  category: Category[];
  onChefsModalVisible: (categoryId: string) => Promise<void>;
}

export function CategoryModal({ visible, onCategoryModalVisible, category, onChefsModalVisible }: CategoryModalProps) {

  if(!category) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      onRequestClose={onCategoryModalVisible}
      animationType='slide'
      presentationStyle='pageSheet'
    >
      <ModalBody>
        <ContainerText>
          <Text color='#fff' weight='600' size={24}>
            Qual comida quer conhecer?
          </Text>
        </ContainerText>

        < FlatList
          horizontal
          contentContainerStyle={{ paddingHorizontal: 24 }}
          showsHorizontalScrollIndicator={false}
          data={category}
          keyExtractor={category => category._id}
          renderItem={({ item: category }) => {
            return (
              <CenteredContainer>
                <Container onPress={() => onChefsModalVisible(category._id)}>
                  <ImageContainer>
                    <Image
                      source={{
                        uri: `http://192.168.1.6:3001/uploads/${category.imagePath}`
                      }}
                    />
                  </ImageContainer>

                  <Text color='#fff' weight='400' style={{ marginTop: 10 }} size={25}>
                    {category.name}
                  </Text>
                </Container>
              </CenteredContainer>
            );
          }}
        />
      </ModalBody>
    </Modal>
  );
}
