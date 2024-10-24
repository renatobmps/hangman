FROM node:20-slim AS builder 
LABEL maintainer="Renato Brandão"

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM node:20-alpine

ARG NODE_ENV=production

WORKDIR /usr/app

COPY --from=builder /usr/app/ ./

CMD [ "npm", "start"]
