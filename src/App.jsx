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
    </>
  );
};

export default App;
