npx sequelize db:create


npx sequelize model:create --name Airplane --attributes modelNumber:string,capacity:integer 

npx sequelize db:migrate

npx sequelize db:migrate:undo


 select * from INFORMATION_SCHEMA.KEY_COLUMN_USAGE where TABLE_NAME = 'flights' AND CONSTRAINT_SCHEMA = 'flights';