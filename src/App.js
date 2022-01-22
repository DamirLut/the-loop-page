import FirstScreen from './components/FirstScreen';
import FreeShiping from './components/FreeShiping';
import Collection from './components/Collection';
import Catalog from './components/Catalog';
import Subscribe from './components/Subscribe';
import NewItem from './components/NewItem';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <FirstScreen />
      <FreeShiping />
      <Collection />
      <Catalog />
      <NewItem title="Новые модели" />
      <Subscribe />
      <NewItem title="Скидка до 90%" />
      <Footer />
    </>
  );
}

export default App;
