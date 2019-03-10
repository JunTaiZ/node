let mysql = require('mysql');

let config = require('./config.json');

let pool = mysql.createPool(config);

let query = function (sql, callback) {
  pool.getConnection(function (err, connectoin) {
    if (err) {
      callback(err, null, null);
    } else {
      connectoin.query(sql, function (qerr, vals, fields) {
        connectoin.release();
        callback(qerr, vals, fields);
      })
    }
  });
};

module.exports = query;
