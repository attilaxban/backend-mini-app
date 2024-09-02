FROM node:22-alpine

COPY package.json .

RUN npm install && npm install express

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
