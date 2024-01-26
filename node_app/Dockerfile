FROM node:14 AS builder


WORKDIR /app

COPY package*.json ./src/* ./
COPY /src/* ./src/*

RUN npm install --quiet

FROM node:14-alpine
RUN export  DOCKERIZE_VERSION=v0.7.0 && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzvf - -C /usr/local/bin/

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules 
COPY --from=builder /app/src/*  ./src/
CMD dockerize -wait tcp://${MYSQL_HOST}:3306 && node ./src/app.js
EXPOSE 3000