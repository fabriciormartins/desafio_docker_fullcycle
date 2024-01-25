const DatabaseConnetionFactorie = require("../database/DatabaseConnetionFactorie");

class PeopleService {
    async save(nome) {
        return new Promise((resolve, reject)=>{
            const connection = DatabaseConnetionFactorie.getConnection();
            connection.connect()
    
            connection.beginTransaction();
            connection.query(`INSERT INTO people (name) VALUES ( ? )`, nome, (err, result) => {
                if (err){
                    console.error(err)
                    reject(err);
                }
                resolve(result)
            });
            connection.commit();
            connection.end()
        });
    }
    async findAll() {

        const rows = await this.query(`SELECT * FROM people`);
        let peoples = [];
        if (rows) {
            const results = JSON.parse(JSON.stringify(rows))
            peoples.push(...results)
        }
        return peoples;
    };

    query(sql) {
        const connection = DatabaseConnetionFactorie.getConnection();
        connection.connect()
        return new Promise((resolve, reject) => {
            try {

                connection.query(sql, (err, rows) => {
                    if (err) {
                        console.error('Erro na consulta:', err);
                        reject(err);
                        throw err;
                    }
                    resolve(rows);
                });
            } finally {
                connection.end();
            }
        });
    }
}
module.exports = PeopleService;
