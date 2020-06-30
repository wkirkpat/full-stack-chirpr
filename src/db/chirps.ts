import {Query} from "./index";

const getChirps = async () => Query('SELECT c.id, u.name, c.content FROM users u JOIN chirps c ON c.userid = u.id');
const getChirp =  async (id: number) => Query('SELECT c.id, u.name, c.content FROM users u JOIN chirps c ON c.userid = u.id WHERE c.id = ?', [id]);
const newChirp = async (content: string, userid: number) => Query('INSERT INTO chirps(content, userid) VALUES(?,?)', [content, userid]);
const newUser = async (name: string) => Query("INSERT INTO users (name) VALUES(?)", [name]);
const getUsers = async (name: string) => Query("SELECT 1 FROM users WHERE name = ?", [name]);
const deleteChirp = async (id: number) => Query("DELETE FROM chirps WHERE id = ?", [id]);


export default {
    getChirps,
    getChirp,
    newChirp,
    newUser,
    getUsers,
    deleteChirp
}