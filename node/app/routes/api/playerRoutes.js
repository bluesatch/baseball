const express = require('express')
const router = express.Router()

const { playerDao: dao} = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/sort/:sort', (req, res)=> {
    dao.sort(res, dao.table, req.params.sort)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router