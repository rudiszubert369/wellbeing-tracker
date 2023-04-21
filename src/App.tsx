import React from 'react';
import { useAnswers } from './hooks/useAnswers';
import ClearDbBtn from './components/ClearDbBtn';
import CardContainer from './components/CardContainer';


function App() {
  const { answers } = useAnswers();
  console.log(answers);

  return (
    <>
      <CardContainer />
      <ClearDbBtn />
    </>
  );
}

export default App;
