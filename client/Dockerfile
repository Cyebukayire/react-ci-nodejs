FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install -g npm@8.9.0

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

