// Types Express
import { Request, Response } from 'express';

// Model
import { Chef } from '../../app/models/chef';

export async function listChefByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const chef = await Chef.find().where('category').equals(categoryId);

    res.json(chef);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
