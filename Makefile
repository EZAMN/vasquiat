SERVER_SERVICE=server

.PHONY: bash
bash: ## gets inside a container
	docker-compose exec server sh

.PHONY: start
start: up ## start the project

.PHONY: up
up: ## up all containers
	docker-compose up

.PHONY: upd
upd: ## up all containers with detach mode
	docker-compose up -d

.PHONY: stop
stop: ## stop all containers
	docker-compose stop

.PHONY: down
down: ## down all containers
	docker-compose down

.PHONY: build
build: ## docker-compose build
	docker-compose build

.PHONY: import
import: ## yarn run import
	docker-compose exec server yarn run import

.PHONY: ps
ps: ## status from all containers
	docker-compose ps

.PHONY: logsf
logsf: ## gets server log
	docker-compose logs -f ${SERVER_SERVICE}

.PHONY: clear-cache
clear-cache: ## hard clear cache
	docker-compose restart redis

.PHONY: migration
migration: ## execute the migration
	docker-compose exec ${SERVER_SERVICE} sh -c "yarn run knex migrate:latest"

.PHONY: format
format: ## Code standards
	docker-compose exec ${SERVER_SERVICE} sh -c "yarn run format"

.PHONY: test
test: ## execute test
	docker-compose exec ${SERVER_SERVICE} sh -c "yarn run test"

.PHONY: download-translations
download-translations: ## download the translations
	docker-compose exec ${SERVER_SERVICE} sh -c "yarn run translations:download"

.PHONY: upload-translations
upload-translations: ## upload the translations
	docker-compose exec ${SERVER_SERVICE} sh -c "yarn run translations:upload"

.PHONY: help
help: ## Display this help message
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'