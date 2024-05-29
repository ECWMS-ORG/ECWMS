#!/bin/sh

# Wait for other services
sleep 10

# Start Nginx
nginx -g 'daemon off;'
