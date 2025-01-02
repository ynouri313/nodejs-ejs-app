# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose the application port
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
