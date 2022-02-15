FROM golang

WORKDIR /app
ADD . /app
COPY go.mod .
COPY go.sum .
RUN go mod download
RUN go build -o app

ENTRYPOINT ./app

