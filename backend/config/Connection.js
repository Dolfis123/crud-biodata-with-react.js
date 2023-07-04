import { Sequelize } from "sequelize";
const db = new Sequelize({
  host: "localhost",
  username: "root",
  password: "",
  database: "pendataan",
  dialect: "mysql",
});

export default db;