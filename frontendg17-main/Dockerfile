FROM node:13.12.0-alpine as build
WORKDIR /src
ENV PATH /node_modules/.bin:$PATH
COPY package*.json ./

RUN npm install --silent
COPY . ./

RUN npm run build

FROM nginx:alpine
COPY --from=build /src/build /usr/share/nginx/html

# Stage 1, based on NGINX to provide a configuration to be used with react-routerFROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]