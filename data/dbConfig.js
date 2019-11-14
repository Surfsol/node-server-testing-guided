const knex = require('knex');
const config = require('../knexfile.js');

//picks environment
//if finds DB_ENV will use, unless will run development
const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);
