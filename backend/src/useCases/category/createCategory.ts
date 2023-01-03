// Types Express
import { Request, Response } from 'express';

// Model
import { Category } from '../../app/models/category';

export async function createCategory(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name } = req.body;

    const category = await Category.create({
      name,
      imagePath,
    });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
