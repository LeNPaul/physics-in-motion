#!/bin/bash

# Need to install git on Ubuntu first to clone repository
sudo apt install -y git

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

# Install Let's Encrypt
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot

# Install PM2
sudo npm install pm2@latest -g

# Install packages and start using PM2
bash initiate.sh
