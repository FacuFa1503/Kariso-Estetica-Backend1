import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const serviceCollection = 'services';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  availability: { type: Boolean, default: true }
});

serviceSchema.plugin(mongoosePaginate);

export const serviceModel = mongoose.model(serviceCollection, serviceSchema);
