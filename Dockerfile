FROM node:14
ADD . /westwing
WORKDIR /westwing
RUN npm i