FROM node:18 as build

WORKDIR /uiapp

COPY package*.json ./

RUN npm install
RUN npm install axios
RUN npm install web-vitals
RUN npm install serve --save-dev
COPY . . 

RUN npm run build

CMD ["npm", "run", "serve"]

EXPOSE 3000
