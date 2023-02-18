FROM node:16-slim

ENV PATH=/repo/node_modules/.bin:$PATH
COPY package.json package-lock.json /repo/
WORKDIR /repo
RUN npm ci
