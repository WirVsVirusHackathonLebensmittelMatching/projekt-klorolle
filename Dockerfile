FROM node:13

# App directory
WORKDIR /usr/src/app

# Copy backend resources
COPY backend/ ./
RUN npm install

# Copy frontend resources
COPY frontend/ public/

# Main port
EXPOSE 3000

# Runtime
CMD [ "node", "src/index.js" ]