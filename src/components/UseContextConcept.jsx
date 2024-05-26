import { createContext, useContext, useState } from 'react';

//? Membuat konteks
const Context = createContext();

//? Parent
const UseContextConcept = () => {
  const [name, setName] = useState('putri destiana');

  return (
    <>
      <Context.Provider value={{ name, setName, umur: 22 }}>
        <Child1 />;
      </Context.Provider>
      ;
    </>
  );
};

//? Component child nya
const Child1 = () => {
  const data = useContext(Context);

  return (
    <>
      <div>Child 1: {data.name}</div>
      <Child2 />
    </>
  );
};

const Child2 = () => {
  const data = useContext(Context);
  return (
    <>
      <div>Child 1: {data.name}</div>
      <Child3 />
    </>
  );
};

const Child3 = () => {
  const data = useContext(Context);

  const handleClick = () => {
    if (data.name === 'putri destiana') {
      data.setName('putri destiana cantik');
    } else {
      data.setName('putri');
    }
  };

  return (
    <>
      Child 3: Halo {data.name} umur kamu {data.umur}
      <button onClick={handleClick}>Ganti Nama</button>
    </>
  );
};

export default UseContextConcept;
