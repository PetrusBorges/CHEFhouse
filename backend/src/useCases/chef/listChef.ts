// Types Express
import { Request, Response } from 'express';

// Model
import { Chef } from '../../app/models/chef';

export async function listChef(req: Request, res: Response) {
  try {
    const chef = await Chef.find();

    res.json(chef);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
