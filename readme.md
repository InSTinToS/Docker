# Docker

---

## Using

### Start

1. fill file .env
2. `docker-compose up --no-start` (only for build without start)
3. `docker-compose up --no-color --quiet-pull --no-build -d` (only for start without build, remove -d if you want to see logs)
4. access http://localhost:3000/users

### Remove (in order to restart the process)

1. `docker-compose down --remove-orphans --rmi all -v` (down compose and remove all containers, images and volumes associated)
2. Remove db directory

---

## Another commands use `docker --help`
