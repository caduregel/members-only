const pool = require('./pool')

async function createUser(username, password) {
    await pool.query("INSERT INTO users (username, in_club_house, password) VALUES ($1, $2, $3)", [
        username,
        false,
        req.body.password,
    ]);
}

module.exports = {
    createUser
};