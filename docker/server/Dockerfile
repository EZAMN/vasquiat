#------------------------------------
# Base image
#------------------------------------

FROM node:14.17.6-alpine AS base
WORKDIR /usr/src/app

ARG ENV_FILE_PATH
ENV ENV_FILE_PATH $ENV_FILE_PATH
ADD $ENV_FILE_PATH /

RUN apk add --no-cache bash


#------------------------------------
# Build image
#------------------------------------
FROM base AS build
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
RUN yarn build


#------------------------------------
# Final image
#------------------------------------
FROM base AS prod
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY --from=build /usr/src/app/dist dist
COPY --from=build /usr/src/app/start.sh start.sh

EXPOSE $PORT

RUN chmod +x start.sh

ENTRYPOINT ./start.sh