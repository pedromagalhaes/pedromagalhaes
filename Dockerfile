FROM ubuntu:18.04

WORKDIR /usr/src

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000
CMD [ "yarn", "start:dev" ]

