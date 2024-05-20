const con = require('../../config/dbconfig')

const daoCommon = {

    findAll: (res, table)=> {
        
        con.execute(
            `SELECT * FROM ${table};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR, ', error)
                }
            }
        )
    },

    findById: (res, table, id)=> {
        con.execute(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR, ', error)
                }
            }
        )
    },

    sort: (res, table, sort)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY ${sort};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR, ', error)
                }
            }
        )
    },

    create: (req, res, table)=>{
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} =?;`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.json({
                            "Last_id": dbres.insertId,
                        })
                    } else {
                        console.log('DAO ERROR: ', error)
                    }
                }
            )
        }
    }

}

module.exports = daoCommon