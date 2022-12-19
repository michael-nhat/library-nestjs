FROM node:15.4

WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
CMD yarn start

