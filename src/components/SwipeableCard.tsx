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
  isCurrentCard: boolean;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({ question, inputFields, onSwipe, isCurrentCard }) => {
  const { swipeableProps, swipeHandlers } = useSwipeHandlers(onSwipe);

  if (!isCurrentCard) {
    return null;
  }

  return (
    <div {...swipeHandlers}>
      <div
        style={{
          transform: `translate(${swipeableProps.position.x}px, ${swipeableProps.position.y}px)`,
          opacity: swipeableProps.isVisible ? 1 : 0,
        }}
      >
        <h2>{question}</h2>
        {inputFields.map((field, index) => (
          <div key={index}>
            <label>
              {field.label}
              <input
                type={field.type}
                value={swipeableProps.inputValue}
                onChange={swipeableProps.handleInputChange}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeableCard;
