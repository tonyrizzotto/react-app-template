import * as dotenv from 'dotenv';

/*
  `dotenv` path should use the .env.NODE_ENV to separate app secrets by environment
 */
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default ({
  environment: process.env.NODE_ENV,
  address: process.env.ADDRESS,
  port: process.env.PORT,
});
