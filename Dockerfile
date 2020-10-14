FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 1234

CMD ["npm", "start"]