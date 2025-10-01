const users = new Set();

/**
 * @param {string} login
 * @param {string} password
 */
export function login(login, password) {
 const user = users.values().find((user) => user && user.login === login && user.password === password);
 if (!user) throw Error("Not found");
 return user.id;   
}

/**
 * @param {string} login
 * @param {string} password
 */
export function signup(login, password) {
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
export function getUser(userId) {
    const user = users.values().find((user) => user && user.id === userId);
    return user
}

