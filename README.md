# React Application Template

This is a modern React Application Template that utilizes React 18, Vite, GraphQL, Fastify and is served via SSR. This template integrates beautifully with Google Cloud Run to provide a seemless CI/CD experience. [Set up your Cloud Run Application](https://cloud.google.com/run/docs/continuous-deployment-with-cloud-build).

The application can be viewed [here](https://react-app-template-medi3zdobq-uc.a.run.app/)
## How to Use

After you have cloned the project with:

```bash
git clone git@github.com:tonyrizzotto/react-app-template.git
```

You should next update the `title`, `description`, `application`, and `version` settings in your `package.json` file. Then install your package dependencies with:

```bash
npm i
```

The `package.json` also houses an `application` key. This is useful information to run your application. Change it to suit your needs.

### Start Locally

This application template is built to ONLY run in SSR mode. To start, simply run:

```bash
npm run dev
```

This starts a local Vite development server via Fastify and will expose an application at the printed route. Note that the command creates `NODE_ENV=local`. Example output:

```bash
INFO: Server listening at http://127.0.0.1:3456
```

A window WILL NOT open on launch. Simply click the route, or enter the URL in your browser to open up the application. While running, all changes are hot-reloaded in the browser.

### Test the app locally
Once running, you can `curl` a route on the server to observe Graphql working. If you start a server up on port 8080:


```bash
curl http://localhost:8080/r/example?name=<your_name>
```

You can visit the same URL in your browser to view the same result.


### Run in Production

A production build is possible via a build command, as long you set `NODE_ENV=production` (see below on containers):

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

Once the image is built, you can run your application in a browser with port-forwarding. If we use port 5000 in our build, but want to access locally at port 3000, we should map the container port in the `docker run` command:

```bash
docker run -d -p 3000:5000 <image_id>
```

With this command, we are forwarding port 5000 from the running container to port 3000 on our host machine. The application would then be viewable on: 

```
http://localhost:3000
```

## How to use Environment Variables
Because this is the bare minimum to run an application, there are 2 ways you can manage your environment variables that make sense for a production-grade application. 

1. Any included secrets can be attached to a `.env.production` file. Because of `dotenv` we can expose secrets easily via simple config in the [config](./config/index.js) folder.
2. The preferred method would be to inject secrets into the running container. Google provides a [Secret Manager](https://cloud.google.com/secret-manager), which can be enable with Cloud Run to inject any secrets into your container at runtime.

### Accessing Environment Variables in the Client
Though this template uses Vite, I chose not to take advantage of `VITE_` build env-vars because changing them requires a rebuild, which means we can not dynamically change our env vars at runtime.

Instead, our application queries for the exposed `publicEnv` variables which are served up from GraphQL. An example exists in the [repo source](./src/App.jsx).

The reason this is my preferred way is that I will inject my secrets with Secret Manager. If I create a new version of my secrets, we can resync those secrets to the running container, without any downtime on the app.

## Configuration

For easier development, this template utlizies environment secrets with `dotenv`, which will require a `.env.<NODE_ENV>` file for each type of environment you'd like to utilize. This will require you to explicitly set your `NODE_ENV` either in the start command, or in the build step of a dockerfile:

```bash
touch .env.local
```

The other variables that should be set are `ADDRESS` and `PORT` and each should be set in the appropriate `.env` file. This would be a minimum to run the application via SSR.

All other environment variables should be declared in the project via `~/config/environment/index.js` and their respective `.env` files.

DO NOT hardcode secrets into your project.

### Tooling

This template uses the following plugins and packages:

-- `graphql-hooks` - Super light-weight graphql tooling for the client. [link](https://github.com/nearform/graphql-hooks)<br>
-- `Fastify` - The defactor standard for high-grade production APIs. [link](https://www.fastify.io/)<br>
-- `Mercurius` - A GraphQL adapter for Fastify. [link](https://mercurius.dev/#/?id=install)<br>
-- `ESLint` - eslint configuration is based off of `air-bnb`.<br>
-- `Vite` - A fast and lean development experience. [link](https://vitejs.dev/guide/)