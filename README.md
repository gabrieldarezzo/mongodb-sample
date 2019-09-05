Inicie o Repo: 
```shell
npm init
```

package.json
```json
{
  "name": "mongodb-sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/gabrieldarezzo/mongodb-sample.git"
  },
  "author": "Gabriel Darezzo <darezzo.gabriel@gmail.com> (https://inwork.com.br/)",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/gabrieldarezzo/mongodb-sample/issues"
  },
  "homepage": "https://github.com/gabrieldarezzo/mongodb-sample#readme"  
}
```


```shell
npm install express
npm install mongoose
npm install nodemon --save-dev
```


Crie uma conta no Atlas:
https://cloud.mongodb.com/



Modelagem do Banco:
https://docs.mongodb.com/manual/data-modeling/


(1) Manicure :: (n) Locais
Manicure:
```json
{
    __id
    "nome_completo": "Gabriel Darezzo",
    "email": "darezzo.gabriel@gmail.com",
    "senha": "teste123",
    "locals": []
}
```

Local:
```json
{
    "cep": "05373-020",
    "rua": "RUA ISIDORO FAVARO",
    "numero": "78",
    "bairro": "JD. ESTER",
    "cidade" : "SÃO PAULO",
    "estado": "São Paulo",
    "cel" : "(11)94707-4699"
}
```

Insomnia == Manipulação de HTTP 
Enviar o Form> POST 
Requisitar uma pagina> GET


Compass Client