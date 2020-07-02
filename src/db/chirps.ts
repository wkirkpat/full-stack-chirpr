import {Query} from "./index";

const getChirps = async () => Query('SELECT c._created, c.id, u.name, c.content FROM users u JOIN chirps c ON c.userid = u.id ORDER BY _created DESC');

const getChirp =  async (id: number) => Query('SELECT c.id, u.name, c.content FROM users u JOIN chirps c ON c.userid = u.id WHERE c.id = ?', [id]);

//The spNewChirp procedure checks to see if a user exists and creates one if they don't. This procedure also 
//makes sure that when a new chirp is added to the database, it adds the correct userid to that record as well
const newChirp = async (name: string, content: string) => Query('CALL spNewChirp(?,?)', [name, content]);

const deleteChirp = async (id: number) => Query("DELETE FROM chirps WHERE id = ?", [id]);

//The spUpdateChirp procedure works basically in the same way as the spNewChirp procedure, except that it updates an existing entry instead of 
//creating a brand new one
const updateChirp = async (name: string, content: string, id: number) => Query("CALL spUpdateChirp(?,?,?)", [name, content, id]);

//The spCreateMention procedure takes the name given and finds the correct userid or creates a user if one doesn't exist
//Then it takes the most recently created chirp, which should always be the chirp where this mention is located, and
//creates a new entry in the mentions table with that data. 
const newMention = async (name: string) => Query("CALL spCreateMention(?)", [name]);

//The spGetMentions method finds the userid for the passed in name and performs a somewhat complicated join to get all the
//chirps where that name is mentioned
const getMentions = async (name: string) => Query("CALL spGetMentions(?)", [name]);

export default {
    getChirps,
    getChirp,
    newChirp,
    deleteChirp,
    updateChirp,
    newMention,
    getMentions
}