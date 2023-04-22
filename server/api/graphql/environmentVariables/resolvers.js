import ENV from '../../../../config/index.js';

const { default: { client } } = ENV;

export default {
  Query: {
    getPublicEnvVars: () => ({ ...client }),
  },
};
