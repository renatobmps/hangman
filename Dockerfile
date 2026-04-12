FROM node:24-alpine3.23 AS installer
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
WORKDIR /app
COPY package*.json ./
RUN npm clean-install --silent --omit=dev

FROM node:24-alpine3.23 AS builder
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
ARG NODE_ENV=production
WORKDIR /app
COPY ./src ./src
COPY ./next.config.ts ./next.config.ts
COPY ./tsconfig*.json ./
COPY ./server ./server
COPY ./next-sitemap.config.js ./next-sitemap.config.js
COPY --from=installer ./app/node_modules ./node_modules
COPY --from=installer ./app/package.json ./package.json
RUN npx next telemetry disable
RUN npm run build

FROM node:24-alpine3.23 AS migration
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
WORKDIR /app
ARG NODE_ENV=production
COPY ./.sequelizerc ./.sequelizerc
COPY ./config/config.js ./config/config.js
COPY ./migrations ./migrations
COPY ./server ./server
COPY --from=builder ./app/package.json ./package.json
COPY --from=builder ./app/node_modules ./node_modules
CMD [ "npm", "run", "db:migrate" ]

FROM node:24-slim as runner
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
WORKDIR /app
ENV PGSSLMODE=disable
COPY --from=builder ./app/.next ./.next
COPY --from=builder ./app/package.json ./
COPY --from=builder ./app/node_modules ./node_modules
COPY ./.sequelizerc ./.sequelizerc
COPY ./config ./config
COPY ./server ./server
CMD [ "npm", "start" ]
