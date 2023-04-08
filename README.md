# React Application Template

This is a modern React Application Template that utilizes React 18, Vite, GraphQL, Fastify and SSR. `eslint` coniguration is based off of `air-bnb`.

## How to Use

After you have cloned the project with:

```bash
git clone git@github.com:tonyrizzotto/react-app-template.git
```

You should next update the `title`, `description`, `application`, and `version` settings in your `package.json` file. Then install your package dependencies with:

```bash
npm i
```

### Configuration

For easier development, this template utlizies environment secrets with `dotenv`, which will require a `.env.NODE_ENV` file for each type of environment you'd like to utilize. This will require you to explicitly set your NODE_ENV either in the start command, or in the build step of a dockerfile:

```bash
touch .env.local
```

The minimum environment variable is `NODE_ENV` and should be declared in the project via `~/config/environment/index.js`.

The other variables that should be set are `address` and `port` and each should be set in the appropriate `.env` file.

DO NOT hardcode secrets into your project.

#### Development Plugins

This template uses a variety of development-only plugins and packages:

-- `nodemon` - For quickly restarting the development server after changes are saved.<br>
-- `pino-pretty` - Used as a plugin for Fastify logging to improve readability of request logs.<br>
-- `instance.printRoutes()` - When a server instance is started in `NODE_ENV=local`, prints a radix tree used by the router.<br>
