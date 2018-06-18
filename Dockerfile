FROM node:10-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn --pure-lockfile

COPY dist dist/

CMD [ "yarn", "start" ]
