FROM node:latest

WORKDIR /usr/src

COPY . .

EXPOSE 5000

RUN npm i --force
RUN npm run build

CMD ["npm", "start"]