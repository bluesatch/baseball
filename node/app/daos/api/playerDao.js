const con = require('../../config/dbconfig')

const teamDao = {

    table: 'player',

    // teamPlayers: (req, res, table)=> {
    //     con.execute(
    //         ``
    //     )
    // }

    getStats: ()=> {
        `SELECT `
    },

    update: (req, res, table)=> {
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number" 
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "messge": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE ${table}
                    SET ${fields.join(' = ?, ')} = ? WHERE ${table}_id = ?;`,
                [...values, req.params.id],
                (error, dbres)=> {
                    if (!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log('DAO ERROR: ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    }
}

module.exports = teamDao