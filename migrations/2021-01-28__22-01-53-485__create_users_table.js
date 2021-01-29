'use strict';

module.exports = {
  /**
   * Run the migration.
   */
  up(dataContext) {
    const sql = `
      CREATE TABLE users (
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL,
        firstName VARCHAR(100) NULL,
        lastName VARCHAR(100) NULL,
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
    `;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params);
  },

  /**
   * Bring down the migration.
   */
  down(dataContext) {
    const sql = `
      DROP TABLE users;
    `;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params);
  }
};
