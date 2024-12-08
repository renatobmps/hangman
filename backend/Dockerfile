FROM node:22-alpine3.20 AS server
LABEL maintainer="Renato Brandão"

WORKDIR /app/

COPY package*json ./
COPY ./prisma ./
RUN npm install --production

COPY . ./
RUN npm run build

ARG NODE_ENV=production

CMD ["npm", "start"]