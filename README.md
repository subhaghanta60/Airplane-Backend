# Project Structure

This is a Base Node JS Project Template, Which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendations.Feel Free To Change anythings.

`src` ->Inside the src folder all the actual source code regarding the project will reside,this will not include any kind of tests.(You might want to make separated tests folder)

Lets take a Look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configurations & Setup of a library or module will be done. For Example: setting up `dotenv` so that we can use the environment variable anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs,so configurations for this library should also be done here

- `routes`->  In the routes folder,We register a route and the corresponding middleware and controllers to it

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc
- `controllers` -> They are kind of the last middlewares as post them you call your business layer to execute the business login.In Controllers, We just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an outout, we structure the API response in controllers and send the output

-`repositories` -> This Folder contains all the login using which we interact the DB by writing queries,all the raw queries Or ORM queries will go there

- `services`  -> It contains the business login and interacts with repositories for data from the database

- `utils` -> It contains helper methods,error classes etc

## Setup the Project

- Download this template from github and open it in your favorite text editor.
- Go inside the folder path and execute the following commands

 ```bash

    npm install or npm i

 ```bash
- In the root directory create a `.env` file and add the following env variables

  ```text
  PORT= <port number of your choices>

  ```text

  ex:

  ```text 

  PORT=3000

  ```text
- Inside the  `src/config` folder create a file named as `config.json` and write the following code :

```text
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```text

- Or go to the `src` folder and execute the following command:
 ```bash
    npx sequelize init
 ```bash

- By executing the above commands ,We will get migrations and seeders folder along with a config.json inside the config folder

- If you are setting up your development environment, then write the username of your db,password of your db and in dialect mention whatever db you are using for ex: mysql,mariadb etc

- If you are setting up test or prod environments, make sure you also replace the host with the hosted db url
- To run the server ,Eacute 
    ```bash
        npm run dev
    ```bash
