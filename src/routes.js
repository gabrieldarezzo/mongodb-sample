const express = require('express');

const ManicureController = require('./controllers/ManicureController');


const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        ok: true
    });    
});


// [HTTP:POST] -> http://localhost:3333/manicures

// Manicures
routes.post('/manicures', ManicureController.store);
routes.get('/manicures', ManicureController.index);
routes.get('/manicures/:id', ManicureController.getManicureById);

// Locais
routes.get('/locais', ManicureController.getAllLocais);
routes.post('/locais', ManicureController.storeLocation);




routes.get('/delete_all', ManicureController.deleteAll);




module.exports = routes;