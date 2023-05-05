const sequelize = require('../database');
const { Category, Product, Tag } = require('../models');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced successfully');

    const categories = await Category.bulkCreate([
      { name: 'Electronics' },
      { name: 'Clothing' },
      { name: 'Home' }
    ]);

    const tags = await Tag.bulkCreate([
      { name: 'New Arrival' },
      { name: 'Sale' },
      { name: 'Bestseller' }
    ]);

    const products = await Product.bulkCreate([
      { name: 'iPhone 12', description: 'A new era of iPhone.', price: 699.00 },
      { name: 'MacBook Air', description: 'Power. It’s in the Air.', price: 999.00 },
      { name: 'Samsung TV', description: 'Crystal clear colors.', price: 799.00 }
    ]);

    await products[0].addCategories([1]);
    await products[1].addCategories([1, 3]);
    await products[2].addCategories([1]);

    await products[0].addTags([1]);
    await products[1].addTags([2]);
    await products[2].addTags([3]);

    console.log('Data seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDatabase();
