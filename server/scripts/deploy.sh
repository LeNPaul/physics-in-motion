#!/bin/bash

cd /home/physics/physics-in-motion;
pm2 stop PhysicsInMotion;
gulp clean;
git pull;
gulp build;
pm2 start PhysicsInMotion;
