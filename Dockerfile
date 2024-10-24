FROM node:21-slim AS builder 
LABEL maintainer="Renato Brandão"

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM node:21-alpine

ARG NODE_ENV=production
ARG PORT=8000

WORKDIR /usr/app

COPY --from=builder /usr/app/ ./

EXPOSE 8000

CMD [ "npm", "start"]