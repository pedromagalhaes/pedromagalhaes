FROM node:10.13-alpine

WORKDIR /usr/src

COPY package*.json ./
RUN yarn build

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
