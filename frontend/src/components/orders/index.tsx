// Styled-Components
import { Container } from './styles';

// Hooks
import { useState, useEffect } from 'react';

// Components
import { OrderInfo } from '../ordersInfo';

// Utils
import { api } from '../../utils/api';

// Types
import { Order } from '../../types/order';

// SocketIO
import socketIo from 'socket.io-client';

export function Orders() {

  const [order, setOrder] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket']
    });

    socket.on('order@new', (order) => {
      setOrder((prevState) => prevState.concat(order));
    });

    return () => {
      socket.removeListener('order@new');
    };
  }, []);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrder(data);
      });
  }, []);

  const waiting = order.filter((order) => order.status === 'WAITING');
  const isHappening = order.filter((order) => order.status === 'IS_HAPPENING');
  const done = order.filter((order) => order.status === 'DONE');

  function handleRemoveOrder(orderId: string) {
    setOrder((prevState) => prevState.filter((order) => (
      order._id !== orderId
    )));
  }

  function handleUpdateStatus(orderId: string, status: Order['status']) {
    setOrder((prevState) => prevState.map((order) => (
      order._id === orderId ? { ...order, status } : order
    )));
  }

  return (
    <Container>
      <OrderInfo
        title='Aguardando!'
        orders={waiting}
        onRemoveOrder={handleRemoveOrder}
        onUpdateStatus={handleUpdateStatus}
      />

      <OrderInfo
        title='Em produção!'
        orders={isHappening}
        onRemoveOrder={handleRemoveOrder}
        onUpdateStatus={handleUpdateStatus}
      />

      <OrderInfo
        title='Finalizado!'
        orders={done}
        onRemoveOrder={handleRemoveOrder}
        onUpdateStatus={handleUpdateStatus}
      />

    </Container>
  );
}
