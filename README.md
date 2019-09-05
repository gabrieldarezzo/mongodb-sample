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


Compass Client (Do MongoDb que eu usei)

## SQL 

```sql
---- 
/* MySql */
CREATE DATABASE nails;

USE nails;
DROP TABLE users
;
CREATE TABLE users (
	usr_id INT(11) PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(250) NOT NULL,
	email VARCHAR(250) NOT NULL UNIQUE,
	PASSWORD VARCHAR(250) NOT NULL	
)ENGINE=INNODB
;
SELECT * FROM users
;
INSERT users (username, email, PASSWORD) VALUES ('Gabriel', 'darezzo.gabriel@gmail.com', '12345'); -- 1 
INSERT users (username, email, PASSWORD) VALUES ('Webertbh', 'webertbh@gmail.com', '12345');


DROP TABLE locations
;


CREATE TABLE locations (
	loc_id INT(8) PRIMARY KEY AUTO_INCREMENT,
	cep CHAR(8) NOT NULL,
	rua VARCHAR(250) NOT NULL,
	numero VARCHAR(50) NOT NULL,
	bairro VARCHAR(250),
	cidade VARCHAR(250),
	estado CHAR(2) NOT NULL,
	cel VARCHAR(250),
	usr_id INT(11) NOT NULL,
	lat INT(11),
	lng INT(11),	
	KEY `idx_usr_id` (`usr_id`),
	CONSTRAINT `fk_locations_users` FOREIGN KEY (`usr_id`) REFERENCES `users` (`usr_id`) ON UPDATE CASCADE
)ENGINE=INNODB;

INSERT locations (cep, rua, numero, bairro, estado, usr_id) VALUES ('05373030', 'Rua Isidoro Favaro', '78', 'JD ester', 'SP', 1)
INSERT locations (cep, rua, numero, bairro, estado, usr_id) VALUES ('05373020', 'Rua Mafalda Favaro', '80', 'JD ester', 'SP', 1)

INSERT locations (cep, rua, numero, bairro, estado, usr_id) VALUES ('05373010', 'Rua Chatuba', '80', 'JD ester', 'RJ', 2, );

INSERT locations (cep, rua, numero, bairro, estado, usr_id) VALUES ('05373010', 'Rua Pampulhax', '80', 'Pampulha', 'GO', 2)

;
SELECT * FROM locations 
;
SELECT 
  * 
FROM locations
WHERE 
-- estado = 'SP'
-- estado = 'RJ'
-- usr_id = 2
;

SELECT 
  *
 FROM 
users
JOIN locations ON (
  users.usr_id = locations.usr_id
)
WHERE 
estado = 'GO'
;
-- getLocais 
-- getLocations
SELECT 
  *
 FROM 
users
JOIN locations ON (
  users.usr_id = locations.usr_id
)
WHERE 
users.usr_id = 1
;
```

Para usar Node.Js + Mysql

https://www.luiztools.com.br/post/como-usar-nodejs-mysql/


	