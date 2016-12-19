# use Node image
FROM node:argon
# make the /usr/src/app directory in the container -- this is where the app will live
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# expose port 8080 to host the content
EXPOSE 8080
# run a simple 'hostname' command when the container starts
CMD hostname 

