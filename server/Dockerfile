# ==== CONFIGURE =====
# Use a Node LTS base image
FROM node:lts
# Set the working directory to /app inside the container
WORKDIR /personal-website
# Copy app files
COPY .. .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn install
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 4000
# Start the app
CMD [ "yarn", "start" ]