
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

    async getUser(req, res) {
        const { id } = req.params;
        try {
            const oneRegis = await this.entidadeService.getOneRecordById(Number(id))
            return res.status(200).json(oneRegis)
        } catch (error) {
            return res.status(400).json({"error": error})
        }
    }

    async createNew(req, res) {
        const dadosParaCriacao = req.body;

        console.log(dadosParaCriacao)
        try {
            const novoRegistro = await this.entidadeService.createRegistry(dadosParaCriacao);
            return res.status(200).json(novoRegistro)
        } catch (error) {
            return res.status(400).json({"error": "Ocorreu um erro na requisição!"})
        }
    }

    async updateUser(req, res) {

    }

}

module.exports = Controller;