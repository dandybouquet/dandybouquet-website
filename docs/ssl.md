# SSL Certificates

An SSL certificate allows a website to use HTTPS for secure communication. It is possible to generate a certificate using `certbot` and `letsencrypt`.

HTTPS uses port 443 while HTTP uses port 80.

## Creating a SSL Certificate

Certificate is saved at: `/etc/letsencrypt/live/www.dandybouquet.com/fullchain.pem`
Key is saved at: `/etc/letsencrypt/live/www.dandybouquet.com/privkey.pem`

```bash
# Install certbot package
sudo apt install certbot

# Create an ssl-cert group
groupadd ssl-cert
usermod -a -G ssl-cert $USER

chmod -R g=rX /etc/letsencrypt
chgrp -R ssl-cert /etc/letsencrypt
```

## Renewing SSL Certificate

The certificate expires after three months. It _should_ renew automatically, but if it doesn't, run this command then restart the web server.

```bash
certbot renew
```
