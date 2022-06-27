FROM node:14.17.1-alpine as build
WORKDIR /app
COPY ./package.json package-lock.json ./ /app/
RUN npm install @angular/cli
RUN npm install --legacy-peer-deps
COPY ./ .
RUN npm run build

FROM nginx:1.20-alpine as final
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/rollic-case/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
