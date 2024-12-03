# ci-project-poli
Proyecto de integración continua con docker y jenkins.

# Ejecución docker

Ejecutamos el siguiente comando para correr el primer contenedor que corresponde al de la app

docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test integracionapp 

Para correr el de la base de datos

docker run -d --name db mongo

Validamos la correcta ejecución con docker ps y el estado de los contenedores

Conexiòn de los contenedores a la red 

docker network connect integrationnetwork app

docker network connect integrationnetwork db


Validamos que ambos contenedores se encuentren en la red

docker network inspect integrationnetwork


Validaciòn de la conexiòn

docker exec -it app bash

ping db

