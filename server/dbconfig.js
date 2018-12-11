
const mysql = require('mysql')
const pool = mysql.createPool({
  host     :  '127.0.0.1',
  user     :  'root',
  password :  'mysql404yhh',
  database :  'waterdb'
})

const q = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) return reject(err)
            conn.query(sql, values, (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
                conn.release()
            })
        })
    })
}
module.exports = q;
