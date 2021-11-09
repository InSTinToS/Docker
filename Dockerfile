# copy from image node:9-slim
FROM node

# workdir create a dir to auto cd inside when call docker exer -it <containerName> bash
WORKDIR /app

# copy my packagejson to /app
COPY package.json /app

# install packages
RUN yarn install

# copy all files to /app
COPY . /app/

# run code npm start at cmd
CMD [ "npm", "start" ]

