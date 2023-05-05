const express = require('express');
const app = express();
const dotenv = require('dotenv');
const sequelize = require('./database');

// Load environment variables
dotenv.config();

// Connect to database
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(error => console.error('Error connecting to database: ', error));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api', require('./Routes/categoryRoutes'));
app.use('/api', require('./Routes/ProductRoutes'));
app.use('/api', require('./Routes/tagRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
