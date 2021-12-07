FROM node:14.18.0-alpine3.14
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD "npm" "start"