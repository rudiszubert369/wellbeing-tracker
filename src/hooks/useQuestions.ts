import { useState } from 'react';
import questionData from '../data/questions.json';

interface Question {
  id: number;
  question: string;
  inputFields: { label: string; type: string }[];
}

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>(questionData);

  const removeQuestion = (id: number) => {
    setQuestions(prevQuestions => prevQuestions.filter(q => q.id !== id));
  }

  return {
    questions,
    removeQuestion,
  }
}
