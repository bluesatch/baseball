const express = require('express')
const router = express.Router()
const port = process.env.port || 3005

const tables = ['team']

router.get('/api', (req, res)=> {
    res.json({
        'All Players': `http://localhost:${port}/api/player`,
        'All Teams': `http://localhost:${port}/api/team`,
        'All Pitching': `http://localhost:${port}/api/pitching`,
        'All Batting': `http://localhost:${port}/api/batting`,
    })
})

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

router.get('*', (req, res)=> {
    if (req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error. This page is outta here!</h1>')
    }
})



module.exports = router