FROM nginx:1.25.3

RUN export DOCKERIZE_VERSION=v0.7.0 && apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN pwd
ENTRYPOINT dockerize -wait tcp://node_app:3000 && nginx -g 'daemon off;'
EXPOSE 80 
