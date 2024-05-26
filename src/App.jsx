
import Button from './components/Button';
import ButtonState from './components/ButtonState';
import Header from './components/Header';
import MenuResto from './components/MenuResto';
import Mood from './components/Mood';

const App = () => {
  return (
    <>
      <Header />
      <MenuResto />

      <Mood hari="jumat" mood="😊" />
      <Mood hari="minggu" mood="😁" />

      <Button />

      {/* UseSate */}
      <ButtonState />
    </>
  );
};

export default App;
