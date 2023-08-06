FROM node:18-alpine AS build-stage

WORKDIR /frontend
COPY frontend/. .

# You have to set this because it should be set during build time.
ENV REACT_APP_BASE_URL="https://gene-calculator-b2cec66e45a5.herokuapp.com/"

# Build our React App
RUN npm install
RUN npm run build

FROM python:3.9

EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /frontend/build/* app/static/

WORKDIR /backend
COPY backend/. .

# Install Python Dependencies
RUN pip install -r requirements.txt
RUN pip install psycopg2

# Run flask environment
CMD gunicorn app:app