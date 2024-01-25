FROM node:14 AS builder

WORKDIR /app
COPY package*.json ./src/* ./
COPY /src/* ./src/*

RUN npm install --quiet

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules 
COPY --from=builder /app/src/*  ./src/
CMD ["node", "./src/app.js"]
EXPOSE 3000