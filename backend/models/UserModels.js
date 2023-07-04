import { Sequelize } from "sequelize";
import db from "../config/Connection.js";

const { DataTypes } = Sequelize;
const user = db.define(
  "siswa",
  {
    nama: DataTypes.STRING,
    nis: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
    
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await user.sync();
})();

export { user };