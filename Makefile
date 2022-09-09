
APP_CONTAINER  = kcub_front
EXEC_PHP_FPM   = sudo docker exec $(APP_CONTAINER)

.PHONY: install
install:
	sudo docker network prune -f
	sudo docker-compose down --remove-orphans -v
	sudo docker network create db_network || true
	sudo docker-compose build
	sudo docker-compose up -d
	$(EXEC_PHP_FPM) composer install --no-interaction --optimize-autoloader
	sudo chown -R $$USER ./