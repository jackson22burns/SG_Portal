/*Look at db.js to see the specs of database and change accordingly*/

CREATE DATABASE SB_portal;

/*extension used for generating our private keys*/
create extension if not exists "uuid-ossp";

/*user table*/
CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

/*This was added to populate dummy data (for John Doe) to be displayed in our dashboard*/
ALTER TABLE users
ADD COLUMN user_address VARCHAR(255),
ADD COLUMN user_bus VARCHAR(255),
ADD COLUMN ticket_num VARCHAR(255);

UPDATE users SET user_address = '5716 Gilesburg Ct. McAllen, TX' WHERE user_name = 'John Doe';
UPDATE users SET user_bus = 'JD Catering For You' WHERE user_name = 'John Doe';
UPDATE users SET ticket_num = '100100100' WHERE user_name = 'John Doe';

/*documents table*/
CREATE TABLE documents (
    doc_id uuid DEFAULT uuid_generate_v4(),
    doc_path VARCHAR(255),
    user_id uuid,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

