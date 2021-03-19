
# use the below command for development purposes?
FROM node:12 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

# FROM node:12-alpine as react-build
# WORKDIR /usr/src/app
# COPY . ./
# RUN npm install
# RUN npm run build

# ------------- Command below works on openshift --------------------------
# ------------- Use command below to grant container user permissions ---------
# oc adm policy add-scc-to-user anyuid -z default -n myproject --as system:admin 
# using the commands below makes the docker image more lightweight
# Use nginx-alpine as the parent image
# FROM nginx:alpine

# nginx work around for openshift: bitnami
# FROM bitnami/nginx:latest  

# Copy html-javascript output files to nginx
# COPY ./build /usr/share/nginx/html

# Copy ngxinc config file to nginx
# COPY ./nginx.conf /etc/nginx/nginx.conf

# COPY reverse-proxy.conf /etc/nginx
# Make port 80 available to the world outside this container
# EXPOSE 80

# Start nginx
# CMD ["nginx", "-g", "daemon off;"]

# nginx image
# FROM nginx:mainline

# support running as arbitrary user which belogs to the root group
# RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

# users are not allowed to listen on priviliged ports
# RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf
# EXPOSE 8081

# Copy html-javascript output files to nginx
# COPY ./build /usr/share/nginx/html

# comment user directive as master process is run as user in OpenShift anyhow
# RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

# RUN addgroup nginx root
# USER nginx

# CMD ["nginx", "-g", "daemon off;"]