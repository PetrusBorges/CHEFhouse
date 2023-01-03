// Styled-Components
import { Modal } from 'react-native';
import { ModalBody, Form, Input, ContainerButton, Button, ChefContainer, Image, ButtonConfirm } from './styles';

// Components
import { Text } from '../text';
import { OrderConfirmModal } from '../orderConfirmModal';

// Types
import { ChefsDetails } from '../../types/chefsDatils';

// Hooks
import { useState } from 'react';

// Utils
import { api } from '../../utils/api';

interface OrderProps {
  visible: boolean;
  onOrderInfoVisible: () => void;
  selectedChef: null | ChefsDetails;
  onResetOrder: () => void;
}

export function Order({ visible, onOrderInfoVisible, selectedChef, onResetOrder }: OrderProps) {

  if (!selectedChef) {
    return null;
  }

  const [quantityPeople, setQuantityPeople] = useState('');
  const [date, setDate] = useState('');
  const [schedule, setSchedule] = useState('');
  const [iSLoadingModal, setIsLoadingModal] = useState(false);

  async function handleConfirmOrder() {

    if (!selectedChef) {
      return null;
    }

    const order = {
      quantityPeople: quantityPeople,
      date: date,
      schedule: schedule,
      chef: selectedChef._id
    };

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.post('/orders', order);

    setIsLoadingModal(true);
  }

  function handleResetOrder() {
    setQuantityPeople('');
    setDate('');
    setSchedule('');
    onResetOrder();
    setIsLoadingModal(false);
  }

  return (
    <>
      <OrderConfirmModal
        visible={iSLoadingModal}
        onReset={handleResetOrder}
      />

      <Modal
        visible={visible}
        onRequestClose={onOrderInfoVisible}
        animationType='slide'
        presentationStyle='pageSheet'
      >
        <ModalBody>
          <Form>
            <Input
              value={quantityPeople}
              placeholder='Quantidade de pessoas'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              onChangeText={value => setQuantityPeople(value)}
            />

            <Input
              value={date}
              placeholder='Data no formato DD-MM-YYYY'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              onChangeText={value => setDate(value)}
            />

            <Text color='#fff' weight='400' style={{ marginBottom: 12 }}>
            Horários disponíveis:
            </Text>
            <ContainerButton>
              <Button
                onPress={() => setSchedule('14:30')}
              >
                <Text color='#fff' weight='400'>
              14:30
                </Text>
              </Button>

              <Button
                onPress={() => setSchedule('21:00')}
              >
                <Text color='#fff' weight='400'>
              21:00
                </Text>
              </Button>
            </ContainerButton>

            <Text color='#fff' weight='400'>
            Chef escolhido:
            </Text>
            <ChefContainer>
              <Image
                source={{
                  uri: `http://192.168.1.6:3001/uploads/${selectedChef.imagePath}`
                }}
              />

              <Text color='#fff' weight='400' style={{ marginLeft: 15 }}>
                {selectedChef.name}
              </Text>
            </ChefContainer>

            <ButtonConfirm
              style={{ marginTop: 54 }}
              onPress={handleConfirmOrder}
              disabled={!quantityPeople || !date || !schedule}
            >
              <Text color='#000' weight='400'>
              Confirmar ✅
              </Text>
            </ButtonConfirm>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}
