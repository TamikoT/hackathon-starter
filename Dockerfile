FROM node:6-slim

COPY . /api
COPY package.json /api/package.json
COPY .env /api/.env

WORKDIR /api

ENV NODE_ENV production
RUN yarn install --production

CMD ["npm","startpro"]

EXPOSE 3000
