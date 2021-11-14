# copy from image node
FROM node

# workdir create a dir to auto cd inside when call docker exer -it <containerName> bash
WORKDIR /app

# copy my packagejson to ./
COPY package.json /app/

# install packages
RUN yarn install

# copy all files to /app
COPY . /app/

# expose port 3000
EXPOSE 3000

# run code yarn start at cmd
CMD [ "yarn", "start" ]

