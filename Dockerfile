FROM node:19-slim

WORKDIR /usr/src/app

ADD . .

RUN npm ci

RUN npm run build

CMD ["node", "dist/main.js"]
