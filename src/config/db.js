import mongoose from 'mongoose';
import config from './config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log('✅ Conectado exitosamente a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};