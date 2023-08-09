FROM python:3.9

WORKDIR /backend

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD uvicorn --host 0.0.0.0 --port $PORT main:app