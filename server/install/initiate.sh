#!/bin/bash

# Install packages and start application using pm2

# Install npm packages
(cd ../.. ; npm install)

# Start app using PM2
(cd ../.. ; pm2 start bin/www --name PhysicsInMotion)
pm2 save
