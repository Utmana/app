FROM tutum.co/iteamdev/utmana-base
ADD . /app
WORKDIR /app
RUN npm install
EXPOSE 8080
CMD gulp serve