import { useEffect, useState } from 'react';
import { saveAnswer, getAnswers } from '../db';

interface Answer {
  date: string;
  question: string;
  answer: string;
  swipedRight: boolean;
}

export function useAnswers() {
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    async function fetchAnswers() {
      const data = await getAnswers();
      setAnswers(data);
    }

    fetchAnswers();
  }, []);

  const saveAnswerAndAddToList = async (answerData: Answer) => {
    await saveAnswer(answerData);
    setAnswers(prevAnswers => [...prevAnswers, answerData]);
  }

  return {
    answers,
    saveAnswerAndAddToList,
  }
}
