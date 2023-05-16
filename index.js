import Express from "express";
import { dbContatos } from "./Atividades_Aula/1_Aula/Contato.js"

const contatos = dbContatos;
const app = Express();

app.get('/', (req, res) =>{
    res.send(contatos);
});
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });

export default app;





