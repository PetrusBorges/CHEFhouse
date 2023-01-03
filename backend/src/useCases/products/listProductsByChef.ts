// Types Express
import { Request, Response } from 'express';

// Model
import { Product } from '../../app/models/product';

export async function listProductsByChef(req: Request, res: Response) {
  try {
    const { chefsId } = req.params;

    const chef = await Product.find().where('chefProduct').equals(chefsId);

    res.json(chef);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
