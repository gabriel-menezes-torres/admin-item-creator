FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install --save express

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
