FROM node:22-alpine3.19

WORKDIR . /build

COPY package*.json ./

USER root

RUN npm ci --production

RUN npm install pino-pretty

COPY --chown=node:node . .

EXPOSE 4444

CMD ["node", "./bin/server.js"]
