import { openDB } from 'idb';

const DB_NAME = 'my-app-db';
const STORE_NAME = 'users';

export async function getDB() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        },
    });
}

export async function saveUserToDB(user) {
    const db = await getDB();
    await db.put(STORE_NAME, user);
}

export async function getUserFromDB(id) {
    const db = await getDB();
    return await db.get(STORE_NAME, id);
}

export async function removeUserFromDB(id) {
    const db = await getDB();
    await db.delete(STORE_NAME, id);
}
