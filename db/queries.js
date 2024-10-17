const pool = require('./pool')

async function createUser(username, password) {
    await pool.query("INSERT INTO users (username, in_club_house, password) VALUES ($1, $2, $3)", [
        username,
        false,
        password,
    ]);
}

async function getUserByUsername(username) {
    const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    const user = rows[0];
    return user
}
async function getUserByID(id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = rows[0];
    return user
}

module.exports = {
    createUser,
    getUserByUsername,
    getUserByID
};