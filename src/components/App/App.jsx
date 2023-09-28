import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import css from './App.module.css';
import { Container } from '@chakra-ui/react';

console.log(css)

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
