FROM nginx
EXPOSE 80
ADD ./dist /usr/share/nginx/html
