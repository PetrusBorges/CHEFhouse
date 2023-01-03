// Types Express
import { Request, Response } from 'express';

// Model
import { Product } from '../../app/models/product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { chefProduct } = req.body;

    const product = await Product.create({
      imagePath,
      chefProduct,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
