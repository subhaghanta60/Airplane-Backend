npx sequelize db:create


npx sequelize model:create --name Airplane --attributes modelNumber:string,capacity:integer 

npx sequelize db:migrate

npx sequelize db:migrate:undo