// Types Express
import { Request, Response } from 'express';

// Model
import { Category } from '../../app/models/category';

export async function listCategory(req: Request, res: Response) {
  try {
    const category = await Category.find();

    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
