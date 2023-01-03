// Styled-Components
import { Overlay, ModalBody, Header, ContainerInfo, Actions } from './styles';

// Images
import CloseIcon from '../../assets/images/close-icon.svg';

// Types
import { Order } from '../../types/order';
import { Chef } from '../../types/chef';

interface OrderModalProps {
  visible: boolean;
  selectOrder: null | Order;
  chef: null | Chef;
  onCloseModal: () => void;
  onRemoveOrder: () => Promise<void>;
  onUpdateStatus: () => Promise<void>;
  isLoading: boolean;
}

export function OrderModal({ visible, selectOrder, chef, onCloseModal, onRemoveOrder, onUpdateStatus, isLoading }: OrderModalProps) {

  if(!visible) {
    return null;
  }

  if(!chef) {
    return null;
  }

  if(!selectOrder) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <Header>
          <strong>Chef escolhido: {chef.name}</strong>

          <button
            onClick={onCloseModal}
          >
            <img src={CloseIcon} alt="CloseIcon" />
          </button>
        </Header>

        <ContainerInfo>
          <small>Quantidade de pessoas: {selectOrder.quantityPeople}</small>
          <small>Data marcada: {selectOrder.date}</small>
          <small>Horário marcado: {selectOrder.schedule}</small>

          {selectOrder.status === 'WAITING' && (
            <small>Jantar: Em espera</small>
          )}

          {selectOrder.status === 'IS_HAPPENING' && (
            <small>Jantar: Acontecendo</small>
          )}

          {selectOrder.status === 'DONE' && (
            <small>Jantar: Concluido</small>
          )}
        </ContainerInfo>

        <Actions>
          {selectOrder.status !== 'DONE' && (
            <button
              type='button'
              className='primary'
              onClick={onUpdateStatus}
              disabled={isLoading}
            >
            Atualizar
            </button>
          )}

          <button
            type='button'
            className='secondary'
            onClick={onRemoveOrder}
            disabled={isLoading}
          >
            Remover horário
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
