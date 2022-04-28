const knex = require('knex');
const configuration = require('../../knexfile');

const newRegisters = knex(configuration.development);

module.exports = newRegisters