
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

}

module.exports = Controller;