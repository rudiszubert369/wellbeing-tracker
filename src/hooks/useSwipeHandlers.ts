import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';

// type SwipeHandlers = ReturnType<typeof useSwipeHandlers>;

const useSwipeHandlers = (onSwipe: (swipedRight: boolean, inputAnswer: string) => void) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  const swipeHandlers = useSwipeable({
    onSwiping: (event) => {
      setPosition({ x: event.deltaX, y: event.deltaY });
    },
    onSwiped: (event) => {
      const threshold = 100;
      if (Math.abs(event.deltaX) > threshold) {
        setIsVisible(false);
        const swipedRight = event.deltaX > 0;
        onSwipe(swipedRight, inputValue);
      } else {
        setPosition({ x: 0, y: 0 });
      }
    },
    trackMouse: true,
  });

  return { position, isVisible, inputValue, handleInputChange, ...swipeHandlers };
};

export default useSwipeHandlers;
