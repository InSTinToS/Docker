# copy from image node
FROM node:16-alpine3.12

# workdir create a dir to auto cd inside when call docker exer -it <containerName> bash
WORKDIR /app/frontend/

# copy my packagejson to ./
COPY package.json /app/frontend/

# install packages
RUN yarn install

# copy all files to /app
COPY . /app/frontend/

# expose port 3000 and 35729 for hot reload (websocket)
EXPOSE 35729 
EXPOSE 3000

# run code yarn start at cmd
CMD [ "yarn", "start" ]

