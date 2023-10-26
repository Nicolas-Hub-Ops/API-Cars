import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    foto: { type: String, required: false },
    name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    age: { type: String, required: true },
}, { versionKey: false });

const clientes = mongoose.model('Clientes', ClienteSchema);

export default clientes;