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

async function enterClubHouse(id) {
    await pool.query("UPDATE users SET in_club_house = TRUE WHERE id = $1;", [id])
}

async function createNewMessage(authorName, title, content, date){
    await pool.query("INSERT INTO messages (author, title, content, added) VALUES ($1, $2, $3, $4)", [
        authorName, title, content, date
    ])
}

async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows
}

module.exports = {
    createUser,
    getUserByUsername,
    getUserByID,
    enterClubHouse,
    createNewMessage,
    getAllMessages
};