FROM node:13

# App directory
WORKDIR /usr/src/app

# Copy backend resources
COPY backend/ ./
RUN npm install

# Copy frontend resources
COPY frontend/ frontend/

# Main port
EXPOSE 3000

# Runtime
CMD [ "node", "backend/src/index.js" ]