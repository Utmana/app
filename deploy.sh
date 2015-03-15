gulp build
docker build -t utmana-app -t utmana-base .
docker tag -f utmana-app tutum.co/iteamdev/utmana-app
docker tag -f utmana-base tutum.co/iteamdev/utmana-base
docker push tutum.co/iteamdev/utmana-base
docker push tutum.co/iteamdev/utmana-app
