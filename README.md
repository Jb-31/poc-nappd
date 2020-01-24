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

https://www.apollographql.com/docs/react/get-started/

https://blog.logrocket.com/build-a-graphql-react-app-with-typescript/

Install & start the backend server : 
------------------------
```
cd backend
npm install
docker-compose up -d
cd backend/prisma
prisma deploy
node backend/src/index.js
```

Install & start the frontend react app : 
------------------------
```
cd frontend
npm install
npm start
```

Start the frontend react app PROD (static) : 
------------------------
```
cd frontend
npm run build
http://localhost:17080
```


Graphql web interface
http://localhost:4000/

Prisma admin
http://localhost:4466/_admin

Ant design console
http://localhost:3000/

Frontend:
http://localhost:8000/welcome
