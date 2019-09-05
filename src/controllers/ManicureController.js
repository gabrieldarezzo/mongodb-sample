const Manicure = require('./../models/Manicure')
const Local = require('./../models/Local')

module.exports = {
    async index(req, res) {
        const manicures = await Manicure.find();

        /*
        manicures.map((manicure) => {
            manicure.locals.map((local) => {
                console.log(local);

                local = Local.findById({
                    _id : local
                });
                // console.log(local);
            });
        });
        */

        return res.status(200)
            .json(manicures);
    },
    async store(req, res) {

        // 5d7181b223387d3a544a28be == "cep": "05373-020",

        const pessoa = req.body;
        pessoa.locals = ['5d7181b223387d3a544a28be'];
        await Manicure.create(pessoa);

        return res.status(200)
            .json({message: 'Manicure cadastrada com sucesso'});
    },
    async storeLocation(req, res) {
        await Local.create(req.body);

        return res.status(200)
            .json({message: 'Local cadastrado com sucesso'});
    },
    async getAllLocais(req, res) {
        const locais = await Local.find();

        return res.status(200)
            .json(locais);        
    },
    async getManicureById(req, res) {

        const { id } = req.params;

        const manicure = await Manicure.find({
            _id : id
        });

        /*
        manicure.locals.map((local) => {
            const localTemp = Local.find({_id : local});
            locaisManicure.push(localTemp);
        })        
        */
        
        return res.status(200)
            .json(manicure);
    },
    async deleteAll(req, res) {
        const manicures = await Manicure.find().remove();
        return res.status(200)
            .json(manicures);
    },
};