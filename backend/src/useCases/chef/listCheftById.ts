// Types Express
import { Request, Response } from 'express';

// Model
import { Chef } from '../../app/models/chef';

export async function listCheftById(req: Request, res: Response) {
  try {
    const { chefsId } = req.params;

    const chef = await Chef.findById(chefsId);

    res.json(chef);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
