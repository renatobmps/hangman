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
# ARG DB_DIALECT
# ARG DB_NAME
# ARG DB_HOST
# ARG DB_USER
# ARG DB_PASSWORD
# ARG DB_PORT
# ENV POSTGRES_DIALECT=$DB_DIALECT
# ENV POSTGRES_USER=$DB_USER
# ENV POSTGRES_PASSWORD=$DB_PASSWORD
# ENV POSTGRES_HOST=$DB_HOST
# ENV POSTGRES_PORT=$DB_PORT
COPY ./.sequelizerc ./.sequelizerc
COPY ./config/config.ts ./config/config.ts
COPY ./migrations ./migrations
COPY --from=builder ./app/package.json ./package.json
COPY --from=builder ./app/node_modules ./node_modules
# RUN npm run db:migrate
RUN --mount=type=secret,id=DB_DIALECT,target=/run/secrets/DB_DIALECT \
    --mount=type=secret,id=DB_NAME,target=/run/secrets/DB_NAME \
    --mount=type=secret,id=DB_HOST,target=/run/secrets/DB_HOST \
    --mount=type=secret,id=DB_USER,target=/run/secrets/DB_USER \
    --mount=type=secret,id=DB_PASSWORD,target=/run/secrets/DB_PASSWORD \
    --mount=type=secret,id=DB_PORT,target=/run/secrets/DB_PORT \
    npm run db:migrate

FROM node:24-slim as runner
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
WORKDIR /app
ARG DB_DIALECT
ARG DB_NAME
ARG DB_HOST
ARG DB_USER
ARG DB_PASSWORD
ARG DB_PORT
ENV POSTGRES_DIALECT=$DB_DIALECT
ENV POSTGRES_USER=$DB_USER
ENV POSTGRES_PASSWORD=$DB_PASSWORD
ENV POSTGRES_HOST=$DB_HOST
ENV POSTGRES_PORT=$DB_PORT
COPY --from=builder ./app/.next ./.next
COPY --from=builder ./app/.next ./.next
COPY --from=migration ./app/package.json ./
COPY --from=migration ./app/node_modules ./node_modules
CMD [ "npm", "start"]
