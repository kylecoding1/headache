module.exports = {
    development: {
      username: 'root',
      password: 'password',
      database: 'ecommerce',
      host: 'localhost',
      dialect: 'mysql'
    },
    test: {
      username: 'test',
      password: 'testpassword',
      database: 'ecommerce_test',
      host: 'localhost',
      dialect: 'mysql'
    },
    production: {
      username: 'production',
      password: 'productionpassword',
      database: 'ecommerce_prod',
      host: 'localhost',
      dialect: 'mysql'
    }
  };
  