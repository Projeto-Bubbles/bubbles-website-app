FROM node:21-alpine3.18 as build
WORKDIR /app
COPY . .
RUN npm install

FROM nginx:stable-alpine
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]