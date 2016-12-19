#!/bin/bash

while getopts :rbs: FLAG; do
	case $FLAG in
		r)
                        dir_path=$(pwd)
			sudo docker run -d -p 41960:8080 -v ${dir_path}/:/usr/src/app/ --name ghostanza justin/nodeapp /bin/bash -c "cd /usr/src/app && npm install && npm start"
			exit
			;;
		b)
			sudo docker build -t justin/nodeapp .
			exit
			;;
		s)
			if [ $OPTARG == 'rm' ]
			then
				sudo docker stop ghostanza;
				sudo docker rm ghostanza;
			elif [ $OPTARG == 'start' ]
			then
				sudo docker start ghostanza;
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
