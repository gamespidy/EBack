require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/db');

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({ email: 'adminecommerce@gmail.com' });
    if (existingAdmin) {
      console.log('✅ Admin already exists!');
    } else {
      await User.create({
        name: 'Admin',
        email: 'adminecommerce@gmail.com',
        mobile: '0000000000',
        age: 30,
        country: 'System',
        password: 'AdminEcommerce@123',
        role: 'admin',
      });
      console.log('✅ Admin user created successfully!');
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Admin Seeding Error:', error.message);
    process.exit(1);
  }
};

seedAdmin();
