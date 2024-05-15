all:
	docker-compose up -d
	yarn
	yarn db:migrate
	yarn dev
