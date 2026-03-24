FROM node:24-slim AS installer
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
WORKDIR /usr/app
COPY package*.json ./
RUN npm clean-install --silent --omit=dev

FROM node:24-slim AS builder 
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
WORKDIR /usr/app
COPY --from=installer /usr/app/ ./
COPY . ./
RUN npm run build

FROM node:24-alpine as runner
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
ARG NODE_ENV=production
WORKDIR /usr/app
COPY --from=builder /usr/app/ ./
CMD [ "npm", "start"]
