#!/bin/bash
export PATH=/usr/home/evpuser1/.linuxbrew/bin:/usr/home/evpuser1/.linuxbrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/home/evpuser1/.linuxbrew/Cellar/node/18.15.0/lib/node_modules/pm2/bin
cd /usr/www/users/evpuser1/backend/strapi
#/usr/home/evpuser1/.linuxbrew/bin/node /usr/home/evpuser1/.linuxbrew/lib/node_modules/npm/bin/npm-cli.js
pm2 start strapi