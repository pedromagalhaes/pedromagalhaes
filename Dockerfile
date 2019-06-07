FROM node:10.13-alpine

RUN apk update && apk add bash jq curl tini && apk add --no-cache git
COPY container/ /
COPY ./ /usr/src

RUN cd /usr/src && FORCE_COLOR=0 yarn install --emoji=false --no-color --no-progess --frozen-lockfile && yarn build

CMD [ "yarn", "start:dev" ]

