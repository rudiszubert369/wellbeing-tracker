import React from 'react';
import { clearDatabase } from '../db';

const ClearDbBtn = () => {
  return <button onClick={clearDatabase}>Clear Database</button>;
};

export default ClearDbBtn;
