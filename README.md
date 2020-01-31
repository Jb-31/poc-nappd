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
https://medium.com/open-graphql/building-a-credit-system-w-prisma-pt-1-cd1e927ecfe9
https://spacexdata.herokuapp.com/graphql
https://medium.com/@xoor/coding-a-graphql-api-with-node-js-c02d617f49f4
https://hackernoon.com/three-ways-to-structure-your-graphql-code-with-apollo-server-4788beed89db
https://www.robinwieruch.de/graphql-apollo-server-tutorial
https://github.com/the-benchmarker/web-frameworks
https://medium.com/sharenowtech/there-are-expressjs-alternatives-590d14c58c1c
https://www.formidable.com/blog/2019/strong-typing/
https://github.com/FormidableLabs/graphql-typescript-blog/tree/with-auto-generated-types

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

Start the frontendv2 react app : 
------------------------
```
cd frontend
npm start
```


Graphql web interface
http://localhost:4000/

Prisma admin
http://localhost:4466/_admin

Ant design console
http://localhost:3000/

Frontend:
http://localhost:8000/welcome
