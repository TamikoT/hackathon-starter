FROM node:6-slim

COPY . /api
COPY package.json /api/package.json
COPY .env.example /api/.env.example

WORKDIR /starter

ENV NODE_ENV production
RUN yarn install --production

CMD ["npm","startpro"]

EXPOSE 3000
