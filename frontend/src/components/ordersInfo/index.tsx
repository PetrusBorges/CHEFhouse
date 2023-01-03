// Styled-Components
import { Container, Header, OrdersContainer } from './styles';

// Components
import { OrderModal } from '../orderModal';

// Hooks
import { useState } from 'react';

// Toastify
import { toast } from 'react-toastify';

// Types
import { Order } from '../../types/order';
import { Chef } from '../../types/chef';

// Utils
import { api } from '../../utils/api';

interface OrderInfoProps {
  title: string;
  orders: Order[];
  onRemoveOrder: (orderId: string) => void;
  onUpdateStatus: (orderId: string, status: Order['status']) => void;
}

export function OrderInfo({ title, orders, onRemoveOrder, onUpdateStatus }: OrderInfoProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectOrder, setSelectOrder] = useState<null | Order>(null);
  const [chef, setChef] = useState<null | Chef>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleModalVisible(order: Order) {
    setIsModalVisible(true);
    setSelectOrder(order);

    api.get(`/chefs/${order.chef}`)
      .then(({ data }) => {
        setChef(data);
      });
  }

  function handleCloseModalVisible() {
    setIsModalVisible(false);
    setSelectOrder(null);
  }

  async function handleRemoveOrder() {

    if (!selectOrder) {
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.delete(`/orders/${selectOrder._id}`);

    toast.success('Agendamento removido com sucesso!');
    onRemoveOrder(selectOrder._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleUpdateStatus() {

    if (!selectOrder) {
      return;
    }

    setIsLoading(true);

    const newStatus = selectOrder.status === 'WAITING' ? 'IS_HAPPENING' : 'DONE';

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.patch(`/orders/${selectOrder._id}`, {
      status: newStatus
    });

    toast.success('Agendamento alterado com sucesso!');
    onUpdateStatus(selectOrder._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <>
      <OrderModal
        visible={isModalVisible}
        selectOrder={selectOrder}
        chef={chef}
        onCloseModal={handleCloseModalVisible}
        onRemoveOrder={handleRemoveOrder}
        onUpdateStatus={handleUpdateStatus}
        isLoading={isLoading}
      />

      <Container>
        <Header>
          <span>{title}</span>
          <small>({orders.length})</small>
        </Header>

        {orders.length > 0 && (
          <OrdersContainer>
            {orders.map((order) => (
              <button
                type='button'
                key={order._id}
                onClick={() => handleModalVisible(order)}
              >
                <strong>{order.date}</strong>
                <span>{order.schedule}</span>
              </button>
            ))}
          </OrdersContainer>
        )}
      </Container>
    </>
  );
}
