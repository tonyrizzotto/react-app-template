const loggingConfig = {
  local: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        colorize: true,
      },
    },
    formatters: {
      level(label) {
        return { severity: label };
      },
    },
  },
  production: true,
  test: false,
};

export default loggingConfig;
