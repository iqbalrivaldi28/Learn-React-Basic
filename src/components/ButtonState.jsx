import { useState } from 'react';

const ButtonState = () => {
  const [counter, setCounter] = useState(0);

  let newCounter = 0;

  const handleClick = () => {
    newCounter = counter + 1;
    console.log(`Saya di klik  ${newCounter} kali`);
    setCounter(newCounter);
  };

  return (
    <div>
      <button onClick={handleClick}>Saya di klik {counter} kali</button>
      <br />
    </div>
  );
};

export default ButtonState;
