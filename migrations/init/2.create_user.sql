CREATE USER 'bufferOverflow-user'@'%' IDENTIFIED BY 'x4bfaKkEM$IvoLIHFim@vejlUm3';
GRANT SELECT, INSERT, UPDATE, DELETE ON buffer_overflow.* TO 'bufferOverflow-user'@'%';
FLUSH PRIVILEGES;
