* [postwait/node-amqp: node-amqp is an AMQP client for nodejs](https://github.com/postwait/node-amqp)

# docker
* [https://hub.docker.com/_/rabbitmq/](https://hub.docker.com/_/rabbitmq/)

docker pull rabbitmq
docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password rabbitmq
