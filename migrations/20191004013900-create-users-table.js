'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db
    .runSql(`
      CREATE TABLE users (
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL,
        firstName VARCHAR(100),
        lastName VARCHAR(100),
        password VARCHAR(255) NULL,
        createdOn DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        updatedOn DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
        lastLogin DATETIME(6) NULL,
        resetToken VARCHAR(255) NULL,
        resetExpires DATETIME(6) NULL,
        CONSTRAINT pk_users_id PRIMARY KEY (id),
        CONSTRAINT uk_users_email UNIQUE KEY (email),
        INDEX idx_users_reset_token (resetToken)
      );
    `);
};

exports.down = function(db) {
  return db
    .runSql(`
      DROP TABLE users;
    `);
};

exports._meta = {
  "version": 1
};
