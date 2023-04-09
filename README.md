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

### Start Locally

This application template is build to ONLY run in SSR mode. To start, simply run:

```bash
npm run dev
```

This starts a Vite development server via Fastify and will expose an application at the printed route. Example output:

```bash
INFO: Server listening at http://127.0.0.1:3456
```

A window WILL NOT open on launch. Simply click the route, or enter the URL in your browser to open up the application. While running, all changes are hot-reloaded in the browser.
### Run in Production

A production build is possible via a build command.

```bash
npm run build
```

This build step compiles everything down into the `src/dist/client` and `src/dist/server` folders, which are location requirements for the `@fastify/vite` SSR plugin. 

To start in production, simply run:

```bash
npm start
```

## Run in Container

The included Dockerfile sets the minimum needed ENV VARS to run the application in a container. To build, simply run:

```bash
docker build -t <name_of_app> .
```

Once the image is built, you can run your application in a browser with port-forwarding. If we expose PORT=3000 in our build, we should map the container port to one accessible on our host machine.

```bash
docker run -d -p 3000:5000 <image_id>
```

With this command, we are forwarding port 5000 from the running container to port 3000 on our host machine. The application would then be viewable on: 

```
http://localhost:3000
```

#### Reminder on secrets
Because this is the bare minimum to run an application, secrets aren't included. Any included secrets should be attached to a `.env.production`, or injected into a container depending on how you're choosing to run the container.

#### Configuration

For easier development, this template utlizies environment secrets with `dotenv`, which will require a `.env.NODE_ENV` file for each type of environment you'd like to utilize. This will require you to explicitly set your `NODE_ENV` either in the start command, or in the build step of a dockerfile:

```bash
touch .env.local
```

The other variables that should be set are `ADDRESS` and `PORT` and each should be set in the appropriate `.env` file. This would be a minimum to run the application via SSR.

All other environment variables should be declared in the project via `~/config/environment/index.js` and their respective `.env` files.

DO NOT hardcode secrets into your project.

#### Development Plugins

This template uses a variety of development-only plugins and packages:

-- `nodemon` - For quickly restarting the development server after changes are saved.<br>
-- `pino-pretty` - Used as a plugin for Fastify logging to improve readability of request logs.<br>
-- `instance.printRoutes()` - When a server instance is started in `NODE_ENV=local`, prints a radix tree used by the router.<br>
