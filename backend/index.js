import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"
import { Sequelize } from "sequelize";
const db = new Sequelize({
    host: "localhost",
    username: "root",
    password: "",
    database: "pendataan",
    dialect: "mysql",
  });


const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get("/update/:id", (req, res)=> {
    const id = req.params.id;
    const sqlQuery = "update mahasiswa set name = ?, nim = ? email = ? prodi = ?, gender = ? WHERE id = ?";
     db.query(sqlQuery, [req.body.name, req.body.nim, req.body.email, req.body.prodi, req.body.gender, id], (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
            console.log(result);
        }
     })
})
app.delete("/delete", (req, res) =>{
    const id = req.params.id;
    const sqlQuery = "delete from mahasiswa where id = ?"
    db.query(sqlQuery, [id], (err, result)=>{
        if(err) {
     
           return res.status(500).json({Status: "Error", Error: "Error in delete mahasiswa", err});
    
        }if(result.affectedRows === 0 ){
            return res .status(402).json({Status: "Error", Error: "mahasiswa not found"});
        }
        return res.json({Status: "Success"})
        })
})

app.listen(PORT, () => console.log("server up end running...."));
