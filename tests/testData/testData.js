const ENV = process.env.ENV || 'uat';

/**
 * @typedef {Object} EnvConfig
 * @property {string} baseURL
 * @property {{ username: string, password: string }} credentials
 */

/** @type {Record<string, EnvConfig>} */

const envConfig = {
  uat: {
    baseURL: 'https://www.saucedemo.com/',
    credentials: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
  },
  prod: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    credentials: {
      username: 'Admin',
      password: 'admin123',
    },
  },
};

// safety check
if (!envConfig[ENV]) {
  throw new Error(`Invalid ENV value: ${ENV}`);
}

export default envConfig[ENV];










//other apporch

// const isUAT = process.env.UAT === 'true';

// const config = {
//   baseURL: isUAT
//     ? 'https://www.saucedemo.com/'
//     : 'https://prod.saucedemo.com',

//   credentials: isUAT
//     ? {
//         username: 'standard_user',
//         password: 'secret_sauce',
//       }
//     : {
//         username: 'standard_user',
//         password: 'secret_sauce',
//       },
// };

// export default config;
