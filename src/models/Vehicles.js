import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    foto: { type: String, required: false },
    fabricante: { type: String, required: true },
    modelo: { type: String, required: true },
    ano: { type: String, required: true },
    cor: { type: String, required: true },
    estado: { type: String, required: true },
    quilometragem: { type: Number, required: true },
    combustivel: { type: String, required: true },
    cambio: { type: String, required: true },
    motorizacao: { type: String, required: true },
    potencia: { type: Number, required: true },
    tracao: { type: String, required: true },
    peso: { type: Number, required: true },
    cidade: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
}, { versionKey: false });

const vehicle = mongoose.model('Vehicles', VehicleSchema);

export default vehicle;