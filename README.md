# Testing a Docker container to run Node/Express app
Learning the very basics of Docker to run a Node server so I don't have to install Node on every machine I want to work on.

I was also tinkering with using my `routes` as middleware so I could pass the `app` instance to it. Also using `express-session` to set session variables


Repo contains the `Dockerfile` which builds the container and a `dockerize.sh` shell script to make the `docker run` command and the `docker stop` and `docker start`, etc. commands a little easier (the `docker run` command is a little verbose and annoying to write out because of the way I'm syncing the files and running `npm install` and `npm start` when it runs).
