FROM node:argon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 8080
CMD hostname 

