FROM node:18-alpine as build

# Set NODE_ENV for entire container
ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Copy over package files
COPY ["package.json", "package-lock.json*", "./"]

# Install Dependencies based on package-lock
RUN npm ci

# Copy everything in our project to the docker file
COPY . .

# Build the application DIST
RUN npm run build

# Required ENV VARS for running in a container
ENV ADDRESS=0.0.0.0
ENV PORT=8080

# Start the
CMD ["npm", "start"]

