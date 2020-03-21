FROM node:13

# App directory
WORKDIR /usr/src/app

# Copy app dependencies
COPY package*.json ./
RUN npm install

# Copy application sources
COPY . .

# Main port
EXPOSE 3000

# Runtime
CMD [ "node", "app.js" ]