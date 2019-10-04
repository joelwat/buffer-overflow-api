CREATE USER 'bufferOverflow-user'@'%' IDENTIFIED BY SECRET_PASSWORD; -- Replace with a real password.
GRANT SELECT, INSERT, UPDATE, DELETE ON buffer_overflow.* TO 'bufferOverflow-user'@'%';
FLUSH PRIVILEGES;
