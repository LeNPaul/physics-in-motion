#!/bin/bash

# Install npm packages
(cd ../.. ; npm install)

# Start app using PM2
(cd ../.. ; pm2 start bin/www --name PhysicsInMotion)
