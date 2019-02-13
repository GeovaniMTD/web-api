const express = require('express')
const controller = require('../controller/spoiler')

const router = express.Router()

router.get('/soilers/:id', controller.buscarUm)

router.get('/soilers', controller.buscaTodos)

router.post('/soilers', controller.criar)

router.put('/soilers/:id', controller.atualizar)

router.delete('/soilers/:id', controller.excluir)

module.exports = router;