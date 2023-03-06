FROM node:12-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build/ /usr/share/nginx/html