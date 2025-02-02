
class Controller {

    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async getAll(req, res) {
        try {
            const listaDeReistros = await this.entidadeService.getAll();
            return res.status(200).json(listaDeReistros);
        } catch (error) {
            return res.status(400).json({"error": "Ocorreu um erro na requisição!"})
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const oneRegis = await this.entidadeService.getOneRecordById(Number(id))
            return res.status(200).json(oneRegis)
        } catch (error) {
            return res.status(400).json({"error": error})
        }
    }

    async create(req, res) {
        const dadosParaCriacao = req.body;

       
        try {
            const novoRegistro = await this.entidadeService.createRegistry(dadosParaCriacao);
            return res.status(200).json(novoRegistro)
        } catch (error) {
         

            return res.status(400).json({"error": error.message})
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const newData = req.body;

        try {
            const isUpdate = await this.entidadeService.update(newData, Number(id))

            console.log("validado: " + !isUpdate)
            if (!isUpdate) {
                return res.status(400).json({"Error": "Ocorreu um erro ao atualizar o registro!"})
            }

            return res.status(200).json({"Sucesso": "Registro foi atualizado!"})
        
        } catch (error) {

            return res.status(400).json({"Error": error.message})
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            const result = await this.entidadeService.delete(Number(id))
            return res.status(200).json({"Sucesso": result})
        } catch (error) {   
            return res.status(400).json({"Error": error})
        }
    }

}

module.exports = Controller;