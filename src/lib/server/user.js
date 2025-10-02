const users = new Set();
const sessions = new Map();

/**
 * @param {string} login
 */
export async function getUser(login) {
 const user = users.values().find((user) => user && user.login === login);
 return user;   
}

/**
 * @param {string} login
 * @param {string} password
 */
export async function signup(login, password) {
    const user = {
       id: crypto.randomUUID(),
       login,
       password,
    }
    
    users.add(user)
    return user.id;
}

/**
 * @param {string} userId
 */
export async function createSession(userId) {
    const sid = crypto.randomUUID();
    sessions.set(sid, userId);
    return sid
}

/**
 * @param {string} sid
 */
export async function getSession(sid) {
    return sessions.get(sid);
}

/**
 * @param {string} sid
 */
export async function deleteSession(sid) {
    return sessions.delete(sid);
}

