// Data base mongoose
import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
  imagePath: {
    type: String,
    required: true,
  },
  chefProduct: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Chef',
  }
}));
