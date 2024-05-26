import { useMemo, useState } from 'react';

const ButtonUseMemo = () => {
  const [likeCounter, setLikeCounter] = useState(0);
  const [subscribeCounter, setSubscribeCounter] = useState(0);

  const likeMessage = () => {
    console.log('Pesan like rendered');
    return likeCounter < 10 ? 'Like kurang dari 10' : 'Mantap like lebih dari 10';
  };

  const displayMessage = useMemo(() => likeMessage(), [likeCounter]);

  return (
    <>
      <p>
        <button onClick={() => setLikeCounter(likeCounter + 1)}>{likeCounter} Like 👍</button> {displayMessage}
      </p>

      <p>
        <button onClick={() => setSubscribeCounter (subscribeCounter + 1)}>{subscribeCounter} Subcriber ▶️</button>
      </p>
    </>
  );
};

export default ButtonUseMemo;
