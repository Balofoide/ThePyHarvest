FROM node:18 as build

WORKDIR /serapp

COPY package*.json ./


RUN npm install express
RUN npm install cors
RUN npm install


COPY Sow.js ./


CMD ["node", "Sow.js"]

EXPOSE 3108
