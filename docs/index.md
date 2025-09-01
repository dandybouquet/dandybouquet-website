# Dandy Bouquet Web Server

Documentation for building and running the website [dandybouquet.com](https://www.dandybouquet.com)

## Quick Reference

### Test Website

This tests the website with yarn's development mode, allowing for local testing
with error checking and automatic reloads. Forward port 3000 in vscode to view
it in a web browser.

```bash
yarn dev --host 0.0.0.0 --port 3000
```

### Build Website Container

This will build the podman container image which runs the web server.

See [Art Gallery](gallery.md) for updating the art gallery images. The website
must be rebuilt if the gallery images are updated.

```bash
./scripts/build.sh
```

### Run Web Server for Testing

The dev container exposes ports 8080 for HTTP and 8081 for HTTPS.
You can test the website by forwarding those ports in vscode

```bash
# Start dev container
./scripts/start_dev.sh

# Stop dev container
./scripts/stop_dev.sh
```

### Update Production Web Server

The production web server is systemd service. See [Machine Setup](setup.md) for
setup.

```bash
# Build the container
./scripts/build.sh

# Restart the container service
systemctl --user restart website-production.service
```
