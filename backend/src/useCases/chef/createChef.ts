// Types Express
import { Request, Response } from 'express';

// Model
import { Chef } from '../../app/models/chef';

export async function createChef(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, category } = req.body;

    const chef = await Chef.create({
      name,
      description,
      imagePath,
      category,
    });

    res.status(201).json(chef);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
