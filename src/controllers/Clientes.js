import clientes from "../models/Clientes.js";

class controller {
    static async list (req, res) {
        try {
            const cliente = await clientes.find();
            return res.json(cliente);

        } catch (error) {
            res.status(500).json({ 
                Message: "Erro ao listar clientes",
                Error: error
             })
        }
    };

    static async listId (req, res) {
        const id = req.params.id;

        try {
            const cliente = await clientes.findById(id);
            if(cliente === null) {
                return res.json({ message: 'Cliente não encontrado' })
            } else {
                return res.json({ message: 'Cliente encontrado', Cliente: cliente })
            }

        } catch (error) {
            console.error(`Erro ao buscar pelo ID: ${id} \n ${error}`)
            return res.json({ Error: `Erro ao buscar cliente ${id}`, Message: error })
        }
    }

    static async create (req, res) {
        try {
            const cliente = await clientes.create({
                foto: req.body.foto,
                name: req.body.name,
                email: req.body.email,
                country: req.body.country,
                state: req.body.state,
                age: req.body.age,
            })
    
            return res.status(201).json({ Message: "Criado com sucesso", Cliente: cliente })

        } catch (error) {
            console.error(`Erro ao salvar cliente: \n ${error}`)
            return res.status(500).json({ Message: "Erro ao registrar Cliente", Error: error})
        }
    };

    static async update (req, res) {
        const id = req.params.id;

        try {
            const verify = await clientes.findById(id);
            if(verify === null) {
                res.json({ Message: 'Cliente não encontrado' })
            } else {
                const cliente = await clientes.findByIdAndUpdate(id, req.body);
                res.status(202).json({ Message: `Cliente <${id}>  alterado com sucesso`})
            }
            

        } catch (error) {
            console.error(`Erro ao alterar ID: ${id} \n ${error}`)
            res.json({ Message: `Erro ao atualizar Cliente: ${id}`, Error: error})
        }
    }

    static async exclude (req, res) {
        const id = req.params.id;
        
        try {    
            const cliente = await clientes.findByIdAndDelete(id);
            if(cliente === null) {
                res.json({ Message: 'Cliente não encontrado' })
            } else {
                res.json({ Message: 'Cliente deletado com sucesso' })
            }

        
        } catch (error) {
            console.error(`Erro ao deletar cliente com id: ${id} \n ${error}`)   
        }

    }
}

export default controller;