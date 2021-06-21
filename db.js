/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://cfan:adv96086@/lunchly");

db.connect();

module.exports = db;
