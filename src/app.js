import express from 'express';
import connectionDB from './config/DB.js';
import routes from './routes/vehicles.js';

const DB = await connectionDB();

DB.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

DB.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
})

const app = express()

app.use(express.json())
app.use(routes) 



const vehicles = [
  {
    "id": 1,
    "foto": "https://images.pistonheads.com/nimg/45077/AventadorSV_01.jpg",
    "fabricante": "Lamborghini",
    "modelo": "Aventador SV",
    "ano": "2020/2020",
    "cor": "branco",
    "status": "usado",
    "quilometragem": "1400",
    "combustivel": "gasolina",
    "cambio": "automatico",
    "motorização": "V12 Aspirado",
    "potencia": 770,
    "tração": "AWD",
    "peso": "1650",
    "cidade": "Brasilia - DF",
    "preço": "5.600.000",
    "descrição": "Veículo em ótimo estado, faço a entrega para todo o Brasil, poucas unidades no mundo, muito conservado, WhatsApp: (62) 99048-45735"
  },
	{
		"id": 2,
		"foto": "https://s2-autoesporte.glbimg.com/bEz2Mo5Yf43MnjcrHh5BolVDwOc=/0x0:1169x778/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/P/W/bjT2Z0RtytJiSE0jNCBQ/porsche-911-gt3-rs-11428-1.jpg",
		"fabricante": "Porsche",
		"modelo": "911 GT3 RS",
		"ano": "2023/2023",
		"cor": "Prata",
		"status": "Novo",
		"quilometragem": "0",
		"combustivel": "gasolina",
		"cambio": "Automatico",
		"motorização": "40. Boxer I6",
		"potencia": 525,
		"tração": "RWD",
		"peso": "1510",
		"cidade": "Joinville - SC",
		"preço": "5.200.000",
		"descrição": "Carro semi-pista, cambio PDK Automatico de dupla embreagem e 7 marchas, torque de 47.5 Kgfm, 0-100 em 3.2s, banco concha, muita fibra de carbono, bloco de troca rápida nas 4 rodas"
	}
]

export default app;