import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { css } from '@emotion/react';

interface InputField {
  label: string;
  type: string;
}

interface SwipeableCardProps {
  question: string;
  inputFields: InputField[];
  onSwipe: () => void;
}

const cardStyle = css`
  position: absolute;
  touch-action: none;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  width: 100%;
`;

const SwipeableCard: React.FC<SwipeableCardProps> = ({ question, inputFields, onSwipe }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const swipeHandlers = useSwipeable({
    onSwiping: (event) => {
      setPosition({ x: event.deltaX, y: event.deltaY });
    },
    onSwiped: (event) => {
      const threshold = 100;
      if (Math.abs(event.deltaX) > threshold) {
        setIsVisible(false);
        onSwipe();
      } else {
        setPosition({ x: 0, y: 0 });
      }
    },
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...swipeHandlers}>
      <div
        css={cardStyle}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <h2>{question}</h2>
        {inputFields.map((field, index) => (
          <div key={index}>
            <label>
              {field.label}
              <input type={field.type} />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default SwipeableCard;

