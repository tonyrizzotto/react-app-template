const loggingConfig = {
  local: {
    transport: {
      target: 'pino-pretty',
      options: {
        messageFormat: '{level}',
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        colorize: true,
      },
    },
    messageKey: 'message',
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
