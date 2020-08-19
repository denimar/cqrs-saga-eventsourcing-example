# This Example shows:

  - How to config a docker-compose.yml for multiple services
  - How to use nginx as a gateway for microservices on top of Docker containers
  - How a container can access another container in the same Docker network
  - CQRS
  - SAGAS
  - Event Sourcing

## Running

To build and run the containers:
`docker-compose up -d`

then access the url `http://localhost`

## Warning
This application and its services are not production ready, and is not propely configured for deployment. It serves only as a basic starting point to configure nginx and orchestrate several services with `docker-compose`.
