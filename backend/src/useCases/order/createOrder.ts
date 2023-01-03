// Types Express
import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/order';

// SocketIO
import { io } from '../..';

export async function createOrder(req: Request, res: Response) {
  try {
    const { quantityPeople, date, schedule, chef } = req.body;

    const order = await Order.create({
      quantityPeople,
      date,
      schedule,
      chef,
    });

    const orderDetails = await order.populate('chef');

    io.emit('order@new', orderDetails);
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
