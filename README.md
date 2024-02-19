# Keylogger com Envio Criptografado

Este é um simples agente de keylogger em Python que captura as teclas pressionadas pelo usuário e envia os dados criptografados em Base64 para um servidor Node.js. 

## Funcionalidades

- Captura de todas as teclas pressionadas pelo usuário.
- Criptografia dos dados capturados em Base64 antes do envio para o servidor.
- Envio dos dados capturados para um servidor Node.js via HTTP POST.

## Requisitos do Sistema

- Python 3
- Nodejs
- Npm 

## Configuração

1. Crie uma .env para o projeto e instale os requisitos
``` 
    python -m venv .env
    source .env/bin/activate
    pip install -r requirements.txt
```
2. Crie as configuracoes iniciais do node e instale-as
``` 
    cd Sow
    npm install cors
    npm install express
    npm install
```
3. Rode o servidor
```
    node Sow.js
```

4. Extra(UI):
```
    cd Sow/the_haverst_ui
    npm install
    npm install web-vitals
    npm install axios
    npm start
```


### Docker

Se quiser usar em docker, basta rodar o docker-compose

```
docker-compose up --build
```


## Aviso Legal

Este projeto é fornecido apenas para fins educacionais e de teste. Não sou responsável pelo uso indevido ou ilegal deste software.
