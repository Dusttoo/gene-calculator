FROM node:18-alpine AS build-stage

WORKDIR /frontend
COPY frontend/. .

ENV REACT_APP_BASE_URL="https://gene-calculator-b2cec66e45a5.herokuapp.com/"

RUN npm install
RUN npm run build

FROM python:3.9

EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /frontend/build/* app/static/

RUN pip install -r requirements.txt
RUN pip install psycopg2

CMD uvicorn main:app --reload