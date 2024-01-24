FROM alpine:edge

COPY main.go /app/

WORKDIR /app

# Instalar Go, Verificar versão e Compilar o código Go
RUN apk add --no-cache go && \
# Ver a versão do Go
    go version && \
# Compilando código Go
    go mod init hello && \
    CGO_ENABLED=0 go build -o hello
# Configurando a imagem do zero
FROM scratch
# Copiando executável que foi compilado
COPY --from=0 /app/hello /
# Executando a aplicação
CMD ["/hello"]
