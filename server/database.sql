CREATE DATABASE SB_portal;

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

ALTER TABLE users
ADD COLUMN user_address VARCHAR(255),
ADD COLUMN user_bus VARCHAR(255),
ADD COLUMN ticket_num VARCHAR(255);


INSERT INTO users (user_address, user_bus, ticket_num)
 VALUES ('5716 Gilesburg Ct. McAllen, TX', 'JD Catering For You', '100100100')
 WHERE user_name = 'John Doe';

UPDATE users SET user_address = '5716 Gilesburg Ct. McAllen, TX' WHERE user_name = 'John Doe';
UPDATE users SET user_bus = 'JD Catering For You' WHERE user_name = 'John Doe';
UPDATE users SET ticket_num = '100100100' WHERE user_name = 'John Doe';