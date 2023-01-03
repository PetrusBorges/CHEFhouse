// Styled-Components
import { Modal } from 'react-native';
import { ModalBody, Button } from './styles';

// Components
import { Text } from '../text';

// Images
import { CheckCircle } from '../../assets/images/CheckCircle';

interface OrderConfirmModal {
  visible: boolean;
  onReset: () => void;
}

export function OrderConfirmModal({ visible, onReset }: OrderConfirmModal) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <ModalBody>
        <CheckCircle />
        <Text size={20} weight='600' color='#fff' style={{ marginTop: 12 }}>
          Pedido Confirmado
        </Text>
        <Text color='#fff' weight='400' style={{ marginTop: 4 }}>
          O pedido ja entrou na fila de produção!
        </Text>

        <Button onPress={onReset}>
          <Text color='#000' weight='400'>
            OK!
          </Text>
        </Button>
      </ModalBody>
    </Modal>
  );
}
