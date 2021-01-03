#!/bin/bash

# Install and configure components needed to run as a public web service

# After running script, need to run Let's Encrypt to create certificates
# Also configure nginx to serve web application as public web service

# Install nginx and update firewall
sudo apt install -y nginx
sudo ufw allow 'Nginx HTTP'

# Install Let's Encrypt
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot

# Run this command to get the certificates only
# sudo certbot certonly --nginx

# Use the server/config/nginx.conf file and create the file with the contents:
#   /etc/nginx/sites-available/physicsinmotion.ca
# Create link from sites-available to sites-enabled:
#   sudo ln -s /etc/nginx/sites-available/physicsinmotion.ca /etc/nginx/sites-enabled/

# Edit the following in the /etc/nginx/nginx.conf file:
#   ...
#   http {
#       ...
#       server_names_hash_bucket_size 64;
#       ...
#   }
#   ...
