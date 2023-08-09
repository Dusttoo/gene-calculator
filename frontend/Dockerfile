FROM node:18-alpine AS build-stage

WORKDIR /frontend
COPY . .

ENV REACT_APP_BASE_URL="https://gene-calculator-b2cec66e45a5.herokuapp.com/"

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]