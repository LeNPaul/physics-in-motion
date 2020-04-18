#!/bin/bash

sudo mongod --fork --logpath /var/log/mongodb/mongod.log --dbpath ~/data/db/;
npm start;
