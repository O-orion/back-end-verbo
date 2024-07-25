
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

    async creatNew(req, res) {
        const dadosParaCriacao = req.body;

        try {
            const novoRegistro = await this.entidadeService.createRegistry(dadosParaCriacao);
            return res.status(200).json(novoRegistro)
        } catch (error) {
            return res.status(400).json({"error": "Ocorreu um erro na requisição!"})
        }
    }

}

export default Controller;