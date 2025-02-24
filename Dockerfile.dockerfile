# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files & install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose port & run app
EXPOSE 3000
CMD ["node", "server.js"]
