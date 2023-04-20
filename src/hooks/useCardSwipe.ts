import { useAnswers } from './useAnswers';
import { useQuestions } from './useQuestions';
import questionData from '../data/questions.json';

interface CardSwipe {
  onCardSwipe: (id: number, swipedRight: boolean, inputAnswer: string) => void;
}

export function useCardSwipe(): CardSwipe {
  const { saveAnswerAndAddToList } = useAnswers();
  const { removeQuestion } = useQuestions();

  const onCardSwipe = async (id: number, swipedRight: boolean, inputAnswer: string) => {
    const answerData = {
      date: new Date().toISOString(),
      question: questionData.find(q => q.id === id)?.question || "",
      answer: inputAnswer,
      swipedRight: swipedRight,
    };
    await saveAnswerAndAddToList(answerData);
    removeQuestion(id);
  };

  return {
    onCardSwipe,
  }
}
