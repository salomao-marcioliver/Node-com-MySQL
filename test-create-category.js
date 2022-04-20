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
            const [results, fields] = await connection.query('insert into categories (category) values (?)', ['Cat test'])
            console.log(results, fields)
        } catch (err) {
            console.log(error)
        }
    } catch (err) {
        console.log(err)
    }

}
run()