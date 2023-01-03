// Data base mongoose
import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  quantityPeople: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IS_HAPPENING', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  chef: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Chef',
  }
}));
