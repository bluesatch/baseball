const express = require('express')
const router = express.Router()

const { teamDao: dao} = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'team')
})

router.get('/sort/:sort', (req, res)=> {
    dao.sort(res, 'team', req.params.sort)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'team', req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, 'team')
})

module.exports = router