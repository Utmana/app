FROM node
ADD . /app
WORKDIR /app
RUN npm -g install static-server gulp-cli && npm install && gulp build
EXPOSE 8080
CMD static-server -p 8080 dist