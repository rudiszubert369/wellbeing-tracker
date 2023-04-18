import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import questionData from './data/questions.json';
import { saveAnswer, getAnswers } from './db';
import ClearDbBtn from './components/ClearDbBtn';

function App() {

  const [questions, setQuestions] = useState(questionData);
  const [answers, setAnswers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAnswers() {
      const data = await getAnswers();
      console.log(data)
      setAnswers(data);
    }
    fetchAnswers();
  }, []);

  const handleSwipe = async (index: number, answer: any, swipeDirection: string) => {
    await saveAnswer({...answer, swipeDirection});
    setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
  };

  return (
    <div>
      {questions.map((q, index) => (
        <Card
          key={q.id}
          question={q.question}
          inputFields={q.inputFields}
          onSwipe={(swipeDirection: string) => handleSwipe(index, { date: new Date().toISOString(), question: q.question, answer: q.inputFields }, swipeDirection)}
        />
      ))}
      <ClearDbBtn />
    </div>
  );
}

export default App;
