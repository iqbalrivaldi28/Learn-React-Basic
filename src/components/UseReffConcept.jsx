import { useRef } from 'react';

const UseReffConcept = () => {
  const message = useRef(null);
  const displayMessage = useRef(null);

  const handleClick = () => {
    console.log(message.current.value);

    displayMessage.current.innerHTML = message.current.value

    displayMessage.current.style.backgroundColor = '#333'
    displayMessage.current.style.color = '#fff'
    displayMessage.current.style.padding = '5px'
    displayMessage.current.style.marginTop = '5px'
  };

  return (
    <>
      <div>
        <input type="text" ref={message} placeholder="kirim pesan kamu" />
      </div>

      <div>
        <button onClick={handleClick}>Klik Aku 👆</button>
      </div>

      <div ref={displayMessage}></div>
    </>
  );
};

export default UseReffConcept;
