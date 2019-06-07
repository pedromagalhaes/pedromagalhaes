FROM node:10.13-alpine

WORKDIR /usr/src

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000
CMD [ "yarn", "start:dev" ]

