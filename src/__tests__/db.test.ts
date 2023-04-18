import { openDB, IDBPDatabase } from 'idb';
import { initDb, saveAnswer, getAnswers } from '../db';

const DB_NAME = 'dailyQuestions';
const STORE_NAME = 'answers';

describe('database functions', () => {
  let db: IDBPDatabase;

  beforeAll(async () => {
    db = await openDB(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(STORE_NAME, { keyPath: 'date' });
      },
    });
  });

  afterAll(async () => {
    await db.close();
    await indexedDB.deleteDatabase(DB_NAME);
  });

  describe('initDb()', () => {
    it('should create the database object store', async () => {
      const store = db.transaction(STORE_NAME).objectStore(STORE_NAME);
      expect(store).toBeDefined();
    });
  });

  describe('saveAnswer(answer)', () => {
    it('should save an answer to the database', async () => {
      const answer = { date: '2022-01-01', value: 'example answer' };
      await saveAnswer(answer);
      const result = await db.get(STORE_NAME, '2022-01-01');
      expect(result).toEqual(answer);
    });
  });

  describe('getAnswers()', () => {
    it('should return all answers from the database', async () => {
      const answers = [
        { date: '2022-01-01', value: 'example answer 1' },
        { date: '2022-01-02', value: 'example answer 2' },
      ];
      await Promise.all(answers.map((answer) => saveAnswer(answer)));
      const result = await getAnswers();
      expect(result).toEqual(answers);
    });
  });
});
