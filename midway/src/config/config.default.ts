import { MidwayConfig } from '@midwayjs/core';
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1655454903837_5743',
  koa: {
    port: 7001,
  },
  cors: {
    allowMethods: ['GET', 'POST'],
    origin: '*',
  },
  jwt: {
    sercet: '1655454903837_5743',
    expiresIn: '1d',
  },
} as MidwayConfig;
