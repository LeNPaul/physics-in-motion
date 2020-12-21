#!/bin/bash

# Update OS
sudo apt update

# Install MongoDB
sudo apt install -y mongodb

# Install cURL
sudo apt install -y curl

# Install NodeJS
cd ~
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install -y nodejs
sudo apt install -y npm

# Install nginx and update firewall
sudo apt install -y nginx
sudo ufw allow 'Nginx HTTP'
