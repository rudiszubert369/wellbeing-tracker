import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { saveAnswer, getAnswers } from '../db';

const questionData = [  {    "question": "Did you exercise today?",    "inputFields": [      { "label": "How long did you exercise?", "type": "number" }    ]
  },
  {
    "question": "Did you smoke",
    "inputFields": [
      { "label": "How many", "type": "number" }
    ]
  }
];

function App() {
  const [questions, setQuestions] = useState(questionData);
  const [answers, setAnswers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAnswers() {
      const data = await getAnswers();
      setAnswers(data);
    }
    fetchAnswers();
  }, []);

  const handleSwipe = async (index: number, answer: any) => {
    await saveAnswer(answer);
    setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
  };

  return (
    <div>
      {questions.map((q, index) => (
        <Card
          key={index}
          question={q.question}
          inputFields={q.inputFields}
          onSwipe={() => handleSwipe(index, { date: new Date().toISOString(), question: q.question, answer: q.inputFields })}
        />
      ))}
    </div>
  );
}

export default App;
