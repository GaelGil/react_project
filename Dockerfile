# Use official Node image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.* ./


# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of app
COPY . .

# Expose React dev server
EXPOSE 5173

# Start in development mode
CMD ["npm", "run", "dev"]