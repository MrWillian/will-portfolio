import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Introduction from './pages/Introduction';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Introduction />
      
    </>
  );
}

export default App;
