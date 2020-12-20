#!/bin/bash

# Update and install git
sudo apt update
sudo apt install -y git

# Install MongoDB
sudo apt install -y mongodb

# Install NodeJS
cd ~
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install -y nodejs
sudo apt install -y npm
