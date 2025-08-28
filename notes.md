# Web Server Setup

## Create User

```bash
useradd -m -g users dandy
groupadd ssl-cert
usermod -a -G ssl-cert dandy
chsh -s /bin/bash dandy
```

## Install Packages

```bash

sudo apt-get update
sudo apt-get -y install podman python3.12 python3-pip python3.12-venv

# python3 -m venv .venv
# . .venv/bin/activate
# python3 -m pip install podman-compose
```


## Build Website

```bash
yarn build
cd /home/dandy
npm serve -s dist --ssl-cert /etc/letsencrypt/live/www.dandybouquet.com/fullchain.pem --ssl-key /etc/letsencrypt/live/www.dandybouquet.com/privkey.pem -l 443
```

## Allow port 443 to be bound by non-root

```bash
setcap CAP_NET_BIND_SERVICE=+eip /usr/bin/node
```

## Install packages

```bash
sudo apt update
sudo apt install nginx
```

## Nginx Server Configuration

https://ubuntu.com/tutorials/install-and-configure-nginx

Site config is located at `/etc/nginx/sites-available/dandybouquet` and symlinked to `/etc/nginx/sites-enabled/dandybouquet` so that it is enabled

Useful commands:

```bash
# Restart web server
service nginx restart
```

## Serve Website

```bash
cd ~
serve -s dist --ssl-cert /etc/letsencrypt/live/www.dandybouquet.com/fullchain.pem --ssl-key /etc/letsencrypt/live/www.dandybouquet.com/privkey.pem -l 443 &
```

# SSL Certificates

Certificate is saved at: `/etc/letsencrypt/live/www.dandybouquet.com/fullchain.pem`
Key is saved at: `/etc/letsencrypt/live/www.dandybouquet.com/privkey.pem`

```bash
chmod -R g=rX /etc/letsencrypt
chgrp -R ssl-cert /etc/letsencrypt
```

## Renewing certificate

```bash
# Renew certificate
certbot renew
# Stop existing server
ps -elf | grep " serve"
kill <pid>
cd /home/dandy
# Run server
serve -s dist --ssl-cert /etc/letsencrypt/live/www.dandybouquet.com/fullchain.pem --ssl-key /etc/letsencrypt/live/www.dandybouquet.com/privkey.pem -l 443
```


## Deploy

https://cli.vuejs.org/guide/deployment.html