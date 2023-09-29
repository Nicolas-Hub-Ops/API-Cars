import vehicles from "../models/Vehicles.js";

class controller {
    static async list (req, res) {
        const vehicle = await vehicles.find();
        return res.json(vehicle);
    };

    static async listId (req, res) {
        const id = req.params.id;

        try {
            const vehicle = await vehicles.findById(id);
            return res.json({ message: 'encontrado', Veiculo: vehicle })

        } catch (error) {
            console.error(`Erro ao buscar pelo ID: ${id} \n ${error}`)
        }
    }

    static async create (req, res) {
        try {
            const car = await vehicles.create({
                foto: req.body.foto,
                fabricante: req.body.fabricante,
                modelo: req.body.modelo,
                ano: req.body.ano,
                cor: req.body.cor,
                estado: req.body.estado,
                quilometragem: req.body.quilometragem,
                combustivel: req.body.combustivel,
                cambio: req.body.cambio,
                motorizacao: req.body.motorizacao,
                potencia: req.body.potencia,
                tracao: req.body.tracao,
                peso: req.body.peso,
                cidade: req.body.cidade,
                preco: req.body.preco,
                descricao: req.body.descricao
            })
    
            return res.status(201).json({ message: "Criado com sucesso", Veiculo: car })
        } catch (error) {
            console.error(`Erro ao salvar veículo: \n ${error}`)
        }
    };

    static async update (req, res) {
        const id = req.params.id;

        try {
            const vehicle = await vehicles.findByIdAndUpdate(id, req.body);
            res.status(202).json({ Message: `Veículo <${id}>  alterado com sucesso`, Veiculo: vehicle })
        } catch (error) {
            res.status(500).json({ 
                Message: `Erro ao alterar veiculo <${id}>`,
                Error: error
             })
        }
    }

    static async exclude (req, res) {
        const id = req.params.id;
        
        try {    
            await vehicles.findByIdAndDelete(id);
            res.status('200').send('Veiculo deletado com sucesso')
        
        } catch (error) {
            console.error(`Erro ao deletar veiculo com id: ${id} \n ${error}`)   
        }

    }
}

export default controller;