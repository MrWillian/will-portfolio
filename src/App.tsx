import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Introduction from './pages/Introduction';
import Header from './components/Header';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Introduction />

      <Contact />

      <Portfolio />

      <Footer />
    </>
  );
}

export default App;
