# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./nginx.conf /etc/nginx/conf.d/

COPY ./mukizone_local_ssl.crt /etc/nginx/ssl/mukizone_local_ssl.crt
COPY ./mukizone_local_ssl.key /etc/nginx/ssl/mukizone_local_ssl.key

# Expose the listening port
EXPOSE 80
EXPOSE 443

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]

