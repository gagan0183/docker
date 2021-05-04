FROM node:alpine

WORKDIR /usr/app

# only npm install if package json changes
COPY ./package.json ./

RUN npm install

# copy source codes
COPY ./ ./

CMD ["npm", "start"]