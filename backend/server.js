import express from 'express';
import dotenv from 'dotenv';
import { connectdb } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); // to parse JSON data

app.use('/api/products', productRoutes);

app.listen(5000, () => {
  connectdb();
  console.log('Server is running on http://localhost:5000');
});
