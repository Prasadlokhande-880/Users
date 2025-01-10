# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /user/src/app

# Copy the backend code from the local machine to the container
COPY package.json package-lock.json /user/src/app/

# Install all dependencies specified in package.json
RUN npm install

COPY . /user/src/app/

# Expose the application port
EXPOSE 3000

# Define the command to start the Node.js application
CMD ["npm", "start"]
