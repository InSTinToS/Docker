# Docker

---

## Using

### Start

1. fill file .env
2. `docker-compose up --no-color --quiet-pull -d` (remove -d if you want to see logs)
3. access http://localhost:3000/users

### Remove (in order to restart the process)

1. `docker-compose down --remove-orphans --rmi all -v` (down compose and remove all containers, images and volumes associated)
2. `docker network prune` (remove all unused networks)
3. Remove db directory

### Acces mysql

1. `docker ps` (get the id of mysql database)
2. `docker exec -it ${id} bash` (enter on mysql container using bash terminal)
3. `mysql -u ${USER} -p${PASSWORD}` (access mysql)

---

## Another commands use `docker --help`
