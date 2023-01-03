// Types Express
import { Request, Response } from 'express';

// Model
import { Chef } from '../../app/models/chef';

export async function deleteChef(req: Request, res: Response) {
  try {
    const { chefsId } = req.params;

    await Chef.findByIdAndDelete(chefsId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
