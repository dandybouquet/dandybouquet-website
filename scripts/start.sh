#!/bin/bash
# Starts the website server in a container

port_http=80
port_https=443
name="website-$1"
image=website

if [[ $1 == dev ]]; then
    port_http=8080
    port_https=8081
    name=website-dev
    echo "Starting server in development mode"
    echo "Listening to HTTP on http://0.0.0:0:${port_http}"
    echo "Listening to HTTPS on https://0.0.0:0:${port_https}"
elif [[ $1 != production ]]; then
    echo "error: argument must be 'dev' or 'production'"
    exit 1
fi

# Start the container in daemon mode
podman run --name ${name} --rm -d \
    --publish "${port_https}:443" \
    --publish "${port_http}:80" \
    --volume /etc/letsencrypt/live/www.dandybouquet.com/fullchain.pem:/docker-volumes/etc/letsencrypt/live/www.dandybouquet.com/fullchain.pem \
    --volume /etc/letsencrypt/live/www.dandybouquet.com/privkey.pem:/docker-volumes/etc/letsencrypt/live/www.dandybouquet.com/privkey.pem \
    --restart=unless-stopped \
    ${image}
