import React from 'react';

import Nav from "../../../components/Nav"

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
}

export default Home;