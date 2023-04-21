import { useState } from 'react';
import questionData from '../data/questions.json';
import { useAnswers } from './useAnswers';
import { useQuestions } from './useQuestions';

type OnCardSwipe = (
  id: number,
  swipedRight: boolean,
  inputAnswer: string,
  visibleCardIndex: number,
  setVisibleCardIndex: (index: number) => void
) => void;

interface CardSwipe {
  onCardSwipe: OnCardSwipe;
}

export function useCardSwipe(): CardSwipe {
  const { saveAnswerAndAddToList } = useAnswers();
  const { removeQuestion } = useQuestions();

  const onCardSwipe: OnCardSwipe = async (id, swipedRight, inputAnswer, visibleCardIndex, setVisibleCardIndex) => {
    const answerData = {
      date: new Date().toISOString(),
      question: questionData.find(q => q.id === id)?.question || "",
      answer: inputAnswer,
      swipedRight: swipedRight,
    };
    await saveAnswerAndAddToList(answerData);
    removeQuestion(id);
    setVisibleCardIndex(visibleCardIndex + 1);
  };

  return {
    onCardSwipe,
  }
}
