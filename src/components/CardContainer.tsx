import React, { useState } from 'react';
import { useQuestions } from '../hooks/useQuestions';
import { useCardSwipe } from '../hooks/useCardSwipe';
import Card from '../components/SwipeableCard';

function CardContainer() {
  const { questions } = useQuestions();
  const { onCardSwipe } = useCardSwipe();
  const [visibleCardIndex, setVisibleCardIndex] = useState<number>(0);

  const handleCardSwipe = (id: number, swipedRight: boolean, inputAnswer: string) => {
    onCardSwipe(id, swipedRight, inputAnswer, visibleCardIndex, setVisibleCardIndex);
  };

  return (
    <>
      {questions.map(({ id, question, inputFields }) => (
        <Card
          key={id}
          question={question}
          inputFields={inputFields}
          isCurrentCard={id === visibleCardIndex + 1}
          onSwipe={(swipedRight: boolean, inputAnswer: string) => handleCardSwipe(id, swipedRight, inputAnswer)}
        />
      ))}
    </>
  );
}

export default CardContainer;