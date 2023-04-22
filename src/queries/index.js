export const ENV_QUERY = `
  query Env {
    getPublicEnvVars {
      isEnabled
      customFlag
    }
  }
`;

export default {
  ENV_QUERY,
};
