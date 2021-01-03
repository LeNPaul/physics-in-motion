#!/bin/bash

# Install and configure components needed to run application

# Need to install git on Ubuntu first to clone repository
sudo apt install -y git

# Update OS
sudo apt update

# Install MongoDB
sudo apt install -y mongodb

# Install cURL
sudo apt install -y curl

# Install NodeJS
(cd ~ ;
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh;
sudo bash nodesource_setup.sh;
sudo apt install -y nodejs;
sudo apt install -y npm;)

# Install PM2
sudo npm install pm2@latest -g
pm2 startup systemd > temp.txt ; cat temp.txt | grep sudo > pm2.sh
bash pm2.sh
rm temp.txt
rm pm2.sh

# Install packages and start using PM2
bash initiate.sh
