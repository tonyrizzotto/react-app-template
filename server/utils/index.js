const defaultOpts = {
  messageKey: 'message',
  level: 'info',
  levelKey: 'severity',
  formatters: {
    level(label) {
      return { severity: label };
    },
  },
  serializers: {
    response: (reply) => ({
      statusCode: reply.statusCode,
      responseTime: reply.getResponseTime(),
    }),
  },
};

const loggingConfig = {
  local: {
    ...defaultOpts,
    transport: {
      target: 'pino-pretty',
      options: {
        levelKey: 'severity',
        messageKey: 'message',
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        colorize: true,
      },
    },
  },
  production: { ...defaultOpts },
  test: false,
};

export default loggingConfig;

/*
This is useful in local logging to prevent the logging of static resources in SSR mode
*/
export function shouldNotLogOutput(url) {
  if (url.startsWith('/assets')
  // apply any paths in local that you don't want to see in your logs
  || (url.startsWith('/Pages'))
  || (url.startsWith('/contexts'))
  || (url.startsWith('/queries'))
  || (url.startsWith('/Routes'))
  || (url.startsWith('/mount'))
  || (url.startsWith('/createApp'))
  || (url.startsWith('/App'))
  || (url.startsWith('/@fs'))
  || (url.startsWith('/@vite'))
  || (url.startsWith('/@react'))
  ) {
    return true;
  }
  return false;
}
