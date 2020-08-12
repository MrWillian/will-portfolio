import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Introduction from './pages/Introduction';
import Header from './components/Header';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Introduction />

      <Contact />
    </>
  );
}

export default App;
