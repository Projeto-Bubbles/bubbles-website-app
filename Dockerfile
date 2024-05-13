FROM node:21-alpine3.18 as build
WORKDIR /app
COPY . .
RUN npm install

FROM nginx:stable-alpine
RUN apk update && apk add vim
CMD ["nginx", "-g", "daemon off;"] 