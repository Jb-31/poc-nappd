Boilerplate to start BFF (Backend For Frontend) with NodeJS / Apollo Server 2 / Prima / PostgreSQL / Docker
====================


Prerequisites
--------------------
nodejs / npm 13.6.0
prisma cli (npm install -g prisma) 1.34.10
Docker / Docker-compose

Ressources used :
------------------------
https://www.howtographql.com/graphql-js/4-adding-a-database/
https://github.com/ant-design/ant-design-pro/issues/1260

start the server : 
------------------------
```
docker-compose up -d
node src/index.js
```

http://localhost:4000/

Prisma admin
http://localhost:4466/_admin

Ant design console
http://localhost:3000/

Frontend:
http://localhost:8000/welcome



docker-compose up -d
prisma init --endpoint http://localhost:4466
prisma deploy
prisma generate