# ==== CONFIGURE =====
# Use a Node LTS base image
FROM node:lts as builder
# Set the working directory to /app inside the container
WORKDIR /personal-website
# Copy app files
COPY .. .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn install
# Build the app
RUN yarn build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 80
# Start the app
FROM jawg/nginx-spa:latest
COPY --from=builder /client/build/ /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html