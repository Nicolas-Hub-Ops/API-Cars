import express from 'express';
import connectionDB from './config/DB.js';
import routes from './routes/clientes.js';
import cors from 'cors';

const DB = await connectionDB();

DB.on("error", (erro) => {
  console.error("| Erro ao conectar com Database | 𐄂", erro);
});

DB.once("open", () => {
  console.log("| Conexão com o banco de dados feita com sucesso | ✓");
})

const app = express()

app.use((req, res, next) => {
  app.use(cors());
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(express.json())
app.use(routes) 

export default app;