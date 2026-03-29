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
COPY ./config/config.ts ./config/config.ts
COPY ./migrations ./migrations
COPY --from=builder ./app/package.json ./package.json
COPY --from=builder ./app/node_modules ./node_modules
# RUN npm run db:migrate
RUN --mount=type=secret,id=POSTGRES_DIALECT,target=/run/secrets/DB_DIALECT \
    --mount=type=secret,id=DB_NAME,target=/run/secrets/DB_NAME \
    --mount=type=secret,id=DB_HOST,target=/run/secrets/DB_HOST \
    --mount=type=secret,id=DB_USER,target=/run/secrets/DB_USER \
    --mount=type=secret,id=DB_PASSWORD,target=/run/secrets/DB_PASSWORD \
    --mount=type=secret,id=DB_PORT,target=/run/secrets/DB_PORT \
    npm run db:migrate

# docker buildx build --secret id=DB_DIALECT,src=./.env.local --secret id=DB_NAME,src=./.env.local --secret id=DB_HOST,src=./.env.local --secret id=DB_USER,src=./.env.local --secret id=DB_PASSWORD,src=./.env.local --secret id=DB_PORT,src=./.env.local -t hangman:latest .

FROM node:24-slim as runner
LABEL maintainer="Renato Brandão<renatobmps@gmail.com>"
WORKDIR /app
COPY --from=builder ./app/.next ./.next
COPY --from=builder ./app/.next ./.next
COPY --from=migration ./app/package.json ./
COPY --from=migration ./app/node_modules ./node_modules
RUN --mount=type=secret,id=POSTGRES_DIALECT,target=/run/secrets/DB_DIALECT \
    --mount=type=secret,id=DB_NAME,target=/run/secrets/DB_NAME \
    --mount=type=secret,id=DB_HOST,target=/run/secrets/DB_HOST \
    --mount=type=secret,id=DB_USER,target=/run/secrets/DB_USER \
    --mount=type=secret,id=DB_PASSWORD,target=/run/secrets/DB_PASSWORD \
    --mount=type=secret,id=DB_PORT,target=/run/secrets/DB_PORT
CMD [ "npm", "start"]
