import { useState } from 'react';
import { sculptureList } from './data1.jsx';

export default function Gallery1() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <div>
        {index < sculptureList.length ? ( 
        <div> 
          <h2>
            <i>{sculpture.name} </i>
            by {sculpture.artist}
          </h2>
          <h3>
            ({index + 1} of {sculptureList.length})
          </h3>
          <img
            src={sculpture.url}
            alt={sculpture.alt}
          />
          <p>
            {sculpture.description}
          </p>
        </div> ):(
          <h2>No more images</h2>
        ) 
        }
      </div>
    </>
  );
}
