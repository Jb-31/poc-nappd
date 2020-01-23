install::
	cd backend
	npm install

start::
	docker-compose up -d
	node backend/src/index.js