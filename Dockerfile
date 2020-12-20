FROM node
WORKDIR /masterbridge
COPY . .

ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0

RUN apk add --no-cache gcc musl-dev linux-headers
RUN pip install -r ./docker/requirements.txt

CMD ["flask", "run"]

