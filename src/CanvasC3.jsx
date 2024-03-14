// import { useState } from 'react';
import{useImmer} from 'use-immer';
import Background from './Background.jsx';
import Box from './Box.jsx';

const initialPosition = {
  x: 0,
  y: 0
};

export default function CanvasC3() {
  const [shape, setShape] = useImmer({ // Use useImmer for state
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape(draft => { // Update state immutably using draft
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  function handleColorChange(e) {
    setShape(draft => ({
      ...draft,
      color: e.target.value
    }));
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
