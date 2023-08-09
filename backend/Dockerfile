FROM python:3.9

EXPOSE 8000

WORKDIR /var/www
COPY . .

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "uvicorn", "main:app", "--reload" ]