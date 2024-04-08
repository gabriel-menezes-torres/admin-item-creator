FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:latest as development

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["npm", "start"]
