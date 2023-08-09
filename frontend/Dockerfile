FROM node:18-alpine AS build-stage

WORKDIR /frontend
COPY frontend/. .

ENV REACT_APP_BASE_URL="https://gene-calculator-b2cec66e45a5.herokuapp.com/"

RUN npm install
RUN npm run build
CMD ["npm", "start"]