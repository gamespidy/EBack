const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const Order = require('../models/Order'); // Also clear orders to prevent dangling references

dotenv.config({ path: __dirname + '/../.env' });

const clearData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');

    await Product.deleteMany({});
    console.log('✅ All Products deleted');

    await Order.deleteMany({});
    console.log('✅ All Orders deleted');

    process.exit();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

clearData();
