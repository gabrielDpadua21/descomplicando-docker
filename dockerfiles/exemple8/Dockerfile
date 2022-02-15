FROM golang AS buildando

WORKDIR /app
ADD . /app
COPY go.mod .
COPY go.sum .
RUN go mod download
RUN go build -o apk

FROM alpine
WORKDIR /aplication
COPY --from=buildando /app/apk /aplication

ENTRYPOINT ./apk

