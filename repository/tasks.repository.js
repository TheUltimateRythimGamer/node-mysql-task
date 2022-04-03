const connection = require('./database.js');

getAll = (callback) => {
    connection.query(`SELECT * FROM Tasks`)
        .then((result) => {
            return callback(result.rows);
        }).catch((err) => {
            console.log(err)
            return callback('ERROR');
        });
}

getById = (id, callback) => {
    connection.query(`SELECT * FROM Tasks WHERE id = ${id}`)
        .then((result) => {
            return callback(result.rows[0]);
        }).catch((err) => {
            console.log(err)
            return callback('ERROR');
        });
}

save = async (title, desc, callback) => {
    await connection.query(`INSERT INTO tasks (title, description) VALUES ('${title}', '${desc}')`)
        .then((result) => {
            return callback(true)
        })
        .catch((err) => {
            return callback(false);
        });
}

update = async (id, title, desc, callback) => {
    await connection.query(`UPDATE Tasks SET title = '${title}', description = '${desc}' WHERE id = ${id}`)
        .then((result) => {
            return callback(true)
        })
        .catch((err) => {
            return callback(false);
        });
}

count = async (callback) => {
    await connection.query(`SELECT COUNT(*) FROM tasks`)
        .then((result) => {
            return callback(result.rows[0].count)
        })
        .catch((err) => {
            return callback(false);
        });
}

deleteById = async (id, callback) => {
    await connection.query(`DELETE FROM Tasks WHERE id = ${id}`)
        .then((result) => {
            return callback(true);
        })
        .catch((err) => {
            return callback(err);
        });
}

module.exports = {
    getAll,
    getById,
    save,
    update,
    count,
    deleteById
};