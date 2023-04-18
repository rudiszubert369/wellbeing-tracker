import { openDB } from 'idb';

const DB_NAME = 'dailyQuestions';
const STORE_NAME = 'answers';

export async function initDb() {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'date' });
    },
  });

  return db
}

export async function saveAnswer(answer: any) {
  const db = await initDb();
  await db.put(STORE_NAME, answer);
}
  
export async function getAnswers() {
  const db = await initDb();
  return await db.getAll(STORE_NAME);
}

export async function clearDatabase() {
  const db = await initDb();
  const transaction = db.transaction(STORE_NAME, 'readwrite');
  const store = transaction.objectStore(STORE_NAME);
  await store.clear();
}
