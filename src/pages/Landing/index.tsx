import React from 'react';

import Header from '../../components/Header';
import Introduction from '../Introduction';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Footer from '../Footer';

import { Container } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Header />

      <Introduction />

      <Contact />

      <Portfolio />

      <Footer />
    </Container>
  );
}

export default Landing;
