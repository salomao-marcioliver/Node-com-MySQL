const mysql = require('mysql2/promise')
require('dotenv/config')
const run = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.DB_PASS,
            database: 'cat-products'
        })

        try {
            const [results] = await connection.query('select * from categories')
            console.log(results)
        } catch (err) {
            console.log(error)
        }
    } catch (err) {
        console.log(err)
    }

}
run()