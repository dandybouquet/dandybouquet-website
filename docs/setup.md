# Server Setup

Steps for setting up a new web server machine.

## Create User

Create a user/group for development and running the web server. The means the
server does NOT need to run as root.

```bash
# Create user and group called 'users'
useradd -m -g users <username>

# Change default shell to bash
chsh -s /bin/bash $USER
```

## Add ssh key for passwordless login

Generate a public/private key pair on your host computer, then copy the contents of the public key into your user's `authorized_keys` file on the server.

```bash
# Add authorized key
echo "<public-key>" >> ~/.ssh/authorized_keys
```

## Install Packages

```bash
# Podman
sudo apt update
sudo apt -y install podman

# Python 3.12
sudo apt -y install python3.12 python3-pip python3.12-venv

# Create and activate python virtual environment
python -m venv .venv
. .venv/bin/activate

# Install python packages
pip install -r requirements.txt
```

## Enable HTTP/HTTPS Ports for non-root Users

The web server needs to bind to ports 80 and 443 for web for serving clients. By default, these ports are only allowed for root.

To allow non-root users access to these ports, add this line to the config file `/etc/sysctl.conf`:

```conf
net.ipv4.ip_unprivileged_port_start=80
```

Then run `sysctl -p` to reload the configuration

## Service for Serving Production Website

This setup will create a systemd service which automatically runs the
website's production container on system startup.

```bash
# Enable linger so the user is always logged in
sudo loginctl enable-linger <username>
loginctl show-user dandy  # Should show: "Linger=yes"

# Create a .container file
mkdir --parents ~/.config/containers/systemd
cd ~/.config/containers/systemd
ln -s <path-to-this-repo>/config/website-production.container .

# Restart systemd
# This will create the new service
systemctl --user daemon-reload

# Start the service
systemctl --user start website-production.service
```

## Derpibooru API Key

Store your Derpibooru API Key in a file so that it is not committed to this
repo.

```bash
mkdir ~/.keys
echo "<key-contents>" > ~/.keys/derpibooru
chmod -R 700 ~/.keys
```

## SSL Certificates

See [SLL Certificates](ssl.md)
