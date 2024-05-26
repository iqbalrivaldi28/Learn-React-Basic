import { useEffect, useState } from 'react';

const ButtonUseEffect = () => {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);

  useEffect(() => {
    console.log(`like ${countLike} | dislike ${countDislike}`);
  }, [countLike, countDislike]);

  return (
    <>
      <button onClick={() => setCountLike(countLike + 1)}>{countLike} Like 👍</button>
      <button onClick={() => setCountDislike(countDislike + 1)}>{countDislike} Dislike 👎</button>
    </>
  );
};

export default ButtonUseEffect;
