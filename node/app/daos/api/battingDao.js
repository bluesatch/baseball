const con = require('../../config/dbconfig')

const battingDao = {

    table: 'batting',

    getStats: (req, res, id)=> {

        con.execute(
            `SELECT pl.player_id, pl.fName, pl.lName, pl.throwing_hand, pl.imgUrl, b.batting_avg, b.hits, b.home_runs, b.rbi, b.runs, b.stolen_bases 
            FROM player pl
            JOIN batting b USING (player_id)
            WHERE player_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length == 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            } 
        )
    },

    update: (req, res)=> {
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
                    SET ${fields.join(' = ?, ')} = ? WHERE player_id = ?;`,
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

module.exports = battingDao