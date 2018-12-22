# Physics in Motion

The goal for Physics in Motion is to create dynamics lessons that allow students to learn physics the way it was meant to be taught: through motion. This is a repository for developing the Physics in Motion full stack web application. The production website can be found [here](https://physicsinmotion.ca). The development website can be found [here](https://dev.physicsinmotion.ca), and contains the most recent commit to the Physics in Motion GitHub repository.

## Table of Contents

1. [Installation](#installation)
2. [Deployment](#deployment)
3. [Technology Stack]()

## Installation

1. Download the repository
2. Install npm modules: `npm install`
3. Install bower dependencies `bower install`
4. Start up the server: `npm start`
5. View in browser at http://localhost:8080

## Deployment

* Currently deployed on a Digital Ocean Droplet.

* Web server is handled by nginx, with certificates from Let's Encrypt.

* pm2 is used to deploy the node.js application and ensure that the application is running on the server.

## Technology Stack

* MongoDB
* Node.js
* Express.js
* AngularJS
* Pug
* MathJax
* Gulp

## Development workflow

This repository contains the code that is used in the current Physics in Motion website.

## Project Timeline

* Phase 1 [done]:
  * Implement account creation and user sign-in.
  * Migrate old course content from current placeholder site to new site.

* Phase 2:
  * Create simple quizzes for lessons to review lessons.
  * Create animations to demonstrate concepts and ideas.

* Phase 3:
  * Develop interactive modules to demonstrate concepts and ideas.
  * Increase audience range.

## Server Setup

The Physics in Motion web application is hosted on a Digitalocean server. The specifications and configurations for [creating the current server](https://www.digitalocean.com/docs/droplets/how-to/create/) as follows:

1. Operating System: Ubuntu 18.04 x64
2. System Specifications: Memory: 4 GB, vCPUs: 2 vCPUs, SSD Disk: 80 GB, Transfer: 4 TB, Price: $20 a month
3. No backup or block storage added
4. Datacenter Region: Toronto 1
5. Additional Options: Private Networking, IPv6, and Monitoring are enabled

Initial server setup based on [Digitalocean best practices for Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04).

## Mongodb

Set up using [Digitalocean's tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04).

## Nodejs

Set up Node.js using [Digitalocean's tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04).

## Nginx

Set up using [Digitalocean's tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04).

## Pm2

Set up using [Digitalocean's tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04#step-3-%E2%80%94-installing-pm2).

## Let's Encrypt

Set up using a combination of [Digitalocean's tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04), as well as the [official documentation](https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx).

## Templates used

The following are templates that were used as starting points for building the Physics in Motion web application.

### Bootstrap

The Physics in Motion frontend is based heavily on Bootstrap templates:

1. [Homepage](https://getbootstrap.com/docs/4.1/examples/carousel/)

2. [Login and Registration pages](https://getbootstrap.com/docs/4.1/examples/floating-labels/)

3. [Courses and Lessons pages](https://getbootstrap.com/docs/4.1/examples/album/)

4. [Lessons Module pages](https://blackrockdigital.github.io/startbootstrap-shop-item/)

5. [User Dashboard page](https://getbootstrap.com/docs/4.1/examples/offcanvas/)


### MEAN Stack Starters

The following are some tutorials that were used as the foundation for the Physics in Motion web application:

1. [Foundation for user authentication](https://mherman.org/blog/local-authentication-with-passport-and-express-4/)

2. [Foundation for AngularJS frontend](https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating)
