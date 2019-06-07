# use the latest node LTS release
FROM node:carbon

RUN apk update && apk add bash && apk add --no-cache git

WORKDIR /usr/src

# copy package.json and package-lock.json and install packages. we do this
# separate from the application code to better use docker's caching
# `npm install` will be cached on future builds if only the app code changed
COPY package*.json ./

# copy the app
COPY . .

RUN cd /usr/src && FORCE_COLOR=0 yarn install --emoji=false --no-color --no-progess --frozen-lockfile && yarn build

# expose port 3000 and start the app
EXPOSE 3000
CMD [ "yarn", "start:dev" ]

