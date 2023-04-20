import React from 'react';
import { useQuestions } from './hooks/useQuestions';
import { useCardSwipe } from './hooks/useCardSwipe';
import { useAnswers } from './hooks/useAnswers';
import Card from './components/SwipeableCard';
import ClearDbBtn from './components/ClearDbBtn';

function App() {
  const { questions } = useQuestions();
  const { onCardSwipe } = useCardSwipe();
  const { answers } = useAnswers();
  
  console.log(answers);

  return (
    <>
      {questions.map(({ id, question, inputFields }) => (
        <Card
          key={id}
          question={question}
          inputFields={inputFields}
          onSwipe={(swipedRight: boolean, inputAnswer: string) => onCardSwipe(id, swipedRight, inputAnswer)}
        />
      ))}
      <ClearDbBtn />
    </>
  );
}

export default App;
