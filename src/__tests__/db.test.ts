// // import { openDB, IDBPDatabase } from 'idb';
// import { initDb, saveAnswer, getAnswers, clearDatabase } from '../db';
// import { fakeIndexedDB } from 'fake-indexeddb';

// // const DB_NAME = 'dailyQuestions';
// // const STORE_NAME = 'answers';

// import { openDB } from 'idb';
// // import { initDb, saveAnswer, getAnswers, clearDatabase } from './dailyQuestions';
// jest.mock('idb', () => {
//   const originalModule = jest.requireActual('idb');
//   return {
//     ...originalModule,
//     openDB: (...args: Parameters<typeof originalModule.openDB>): ReturnType<typeof originalModule.openDB> =>
//       originalModule.openDB(...args, { _indexedDB: fakeIndexedDB }),
//   };
// });

// describe('dailyQuestions', () => {
//   afterEach(async () => {
//     // Clear the database after each test to ensure a clean state.
//     await clearDatabase();
//   });

//   it('initializes the database', async () => {
//     const db = await initDb();
//     expect(db.name).toBe('dailyQuestions');
//     expect(db.version).toBe(1);
//     expect(db.objectStoreNames.contains('answers')).toBe(true);
//   });

//   it('saves an answer', async () => {
//     const answer = { date: '2023-04-21', content: 'This is a test answer.' };
//     await saveAnswer(answer);
//     const db = await openDB('dailyQuestions', 1);
//     const savedAnswer = await db.get('answers', '2023-04-21');
//     expect(savedAnswer).toEqual(answer);
//   });

//   it('retrieves all answers', async () => {
//     const answers = [
//       { date: '2023-04-20', content: 'Answer 1' },
//       { date: '2023-04-21', content: 'Answer 2' },
//     ];
//     for (const answer of answers) {
//       await saveAnswer(answer);
//     }
//     const retrievedAnswers = await getAnswers();
//     expect(retrievedAnswers).toEqual(answers);
//   });

//   it('clears the database', async () => {
//     const answer = { date: '2023-04-21', content: 'This is a test answer.' };
//     await saveAnswer(answer);
//     await clearDatabase();
//     const db = await openDB('dailyQuestions', 1);
//     const savedAnswer = await db.get('answers', '2023-04-21');
//     expect(savedAnswer).toBeUndefined();
//   });
// });

export {}
