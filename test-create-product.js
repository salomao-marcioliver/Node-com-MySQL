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
            const [results] = await connection.query('insert into products (product, price) values (?, ?)', ['Product1', 997])
            await connection.query('insert into categories_products (product_id, category_id) values (?, ?)', [results.insertId, 3])
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }

}
run()