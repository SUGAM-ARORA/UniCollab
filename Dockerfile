# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your application will run on
EXPOSE 4000

# Start the application
CMD ["npm", "start"]