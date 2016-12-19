#!/bin/bash

while getopts :rbs: FLAG; do
	case $FLAG in
		r)
			# Get the current directory path
                        dir_path=$(pwd)
			# Run the docker run command, map port 8080 to 41960 (app will live on localhost:41960 in the browser)
			# Set the name of the container to 'ghostanza' and name the image 'justin/nodeapp'
			# End by cd'ing into the /usr/app/src directory and running npm install followed by npm start
			sudo docker run -d -p 41960:8080 -v ${dir_path}/:/usr/src/app/ --name ghostanza justin/nodeapp /bin/bash -c "cd /usr/src/app && npm install && npm start"
			exit
			;;
		b)
			# Build the docker container/image and name it justin/nodeapp
			sudo docker build -t justin/nodeapp .
			exit
			;;
		s)
			# -s rm will stop the ghostanza container and also remove it
			if [ $OPTARG == 'rm' ]
			then
				sudo docker stop ghostanza;
				sudo docker rm ghostanza;
			# -s start will start/resume the ghostanza container
			elif [ $OPTARG == 'start' ]
			then
				sudo docker start ghostanza;
			# -s stop will stop the ghostanza container
			elif [ $OPTARG == 'stop' ]
			then
				sudo docker stop ghostanza;
			fi
			exit
			;;
		/?)
			echo -e "\nINVALID COMMAND LINE OPTION\n"
			exit
			;;
	esac
done	
