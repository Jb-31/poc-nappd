Needed
nodejs / npm 13.6.0
prisma cli (npm install -g prisma) 1.34.10

Ressources :
https://www.howtographql.com/graphql-js/4-adding-a-database/

start the server : 
```
docker-compose up -d
node index.js
```

http://localhost:4000/

Prisma admin
http://localhost:4466/_admin



docker-compose up -d
prisma init --endpoint http://localhost:4466
prisma deploy