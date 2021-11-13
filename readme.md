# Commands runned

| Command                                                                            | Explanation                                                                                                                                                                     |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docker build -t first-docker-image .`                                             | to create/update a image in root directory                                                                                                                                      |
| `docker run --name first-docker-container -p 9000:3000 -d first-docker-image`      | to create a container <br/> with name <i>first-docker-container</i> <br/> directing my port 9000 to docker port 3000 <br/> detached <br/> using <i>first-docker-image</i> image |
| `docker stop first-docker-container`                                               | to stop running <i>first-docker-container</i> container                                                                                                                         |
| I did some changes in code                                                         | add nodemon                                                                                                                                                                     |
| update using first command                                                         | using build at <i>first-docker-image</i>                                                                                                                                        |
| docker run -it -p 9000:3000 --name second-docker-container first-docker-image      | to run the second container with the first image again ain see the logs provided                                                                                                |
| `docker tag first-docker-image instintos/first-docker-repository:first-docker-tag` | to reference <i>first-docker-image</i> to <i>instintos/first-docker-repository</i> create on Docker Hub                                                                         |
| `docker push instintos/first-docker-repository:first-docker-tag`                   | push to Docker Hub                                                                                                                                                              |
| `docker start second-docker-container`                                             | to start <i>second-docker-container</i>                                                                                                                                         |
| `docker exec -it second-docker-container bash`                                     | to enter in <i>second-docker-container</i>                                                                                                                                      |

## Outros comandos

helps

- docker --help
- docker container --help
- docker image --help
- docker volume --help
- docker network --help

- docker --version => versão
- docker info => infos

### Container (docker container)

- create -> cria (--name pra renomear)
- run -> executa e cria se não existir (--name pra renomear)
- rename -> renomeia

- ls -> lista todos
- ports -> lista as portas

- rm -> remove
- prune -> remove todos parados

- start -> inicia
- stop -> para
- pause -> pausa
- unpause -> despausa

- inspect -> info
- top -> lista os processos em execução
- stats -> status de uso
