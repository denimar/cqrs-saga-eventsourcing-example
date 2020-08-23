FROM node:12.18.3

# set working directory
WORKDIR /usr/app

# add `/usr/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install node-sass

# Bundle app source
COPY . .

EXPOSE 3000
CMD npm start