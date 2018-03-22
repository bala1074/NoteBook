# Create Image
$ docker build -t notebook .

# Run Image
$ docker run -p 49160:8080 -d notebook

# Enter the container
$ docker exec -it <container id> /bin/bash

# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>