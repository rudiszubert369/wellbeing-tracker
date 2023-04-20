import React from 'react';
import useSwipeHandlers from '../hooks/useSwipeHandlers';

interface InputField {
  label: string;
  type: string;
}
interface SwipeableCardProps {
  question: string;
  inputFields: InputField[];
  onSwipe: (swipedRight: boolean, inputAnswer: string) => void;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({ question, inputFields, onSwipe }) => {
  const swipeHandlers = useSwipeHandlers(onSwipe);

  return (
    <div {...swipeHandlers}>
      <div
        style={{
          transform: `translate(${swipeHandlers.position.x}px, ${swipeHandlers.position.y}px)`,
          opacity: swipeHandlers.isVisible ? 1 : 0,
        }}
      >
        <h2>{question}</h2>
        {inputFields.map((field, index) => (
          <div key={index}>
            <label>
              {field.label}
              <input
                type={field.type}
                value={swipeHandlers.inputValue}
                onChange={swipeHandlers.handleInputChange}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeableCard;
