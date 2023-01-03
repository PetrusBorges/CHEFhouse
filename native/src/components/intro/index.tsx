// Styled-Components
import { CenteredContainer, Button } from './styles';

// Components
import { Text } from '../text';

// Images
import { Logo } from '../../assets/images/logo';

interface IntroProps {
  onCategoryModalVisible: () => void;
}


export function Intro({ onCategoryModalVisible }: IntroProps) {
  return (
    <CenteredContainer>
      <Logo />
      <Text weight='400' color='#fff' style={{ marginTop: 8 }}>
          CHEF HOUSE
      </Text>

      <Button onPress={onCategoryModalVisible}>
        <Text weight='400'>
            Procurar um chefe!
        </Text>
      </Button>
    </CenteredContainer>
  );
}
