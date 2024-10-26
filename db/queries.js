const pool = require('./pool')

async function createUser(username, password) {
    await pool.query("INSERT INTO users (username, in_club_house, password) VALUES ($1, $2, $3)", [
        username,
        false,
        password,
    ]);
}

async function getUserByUsername(name){
    const {rows} = await pool.query("SELECT * FROM users WHERE username = $1;", [name])
    return rows
}

async function getUserByID(id) {
    const {rows} = await pool.query("SELECT * FROM users WHERE id = $1;", [id])
    return rows
}

module.exports = {
    createUser,
    getUserByUsername,
    getUserByID
};