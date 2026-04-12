FROM node:24

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["node", "server.js"]