FROM node:18

WORKDIR /src

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the application port
EXPOSE 3000

# Run in watch mode
CMD [ "npm", "run", "start:dev" ]
