// Types Express
import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IS_HAPPENING', 'DONE'].includes(status)) {
      return res.status(400).json({
        error: 'Status must be one of these: WAITING, IS_HAPPENING and DONE.',
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
