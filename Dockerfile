FROM node:10-alpine
WORKDIR /opt/nodejs/app
COPY . .
RUN npm install
RUN npm run tsc

EXPOSE 3000
CMD ["npm", "start"]