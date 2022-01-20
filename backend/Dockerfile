# copy from image node
FROM node:16-alpine3.12

# workdir create a dir to auto cd inside when call docker exer -it <containerName> bash
WORKDIR /app/backend/

# copy my packagejson to ./
COPY package.json /app/backend/

# install packages
RUN yarn install
RUN yarn global add nodemon
RUN yarn global add dotenv

# copy all files to /app
COPY /src/ /app/backend/src/

RUN yarn build

# expose port BACKEND_PORT
EXPOSE ${BACKEND_PORT}

# run code yarn start at cmd
CMD ["yarn", "start" ]

