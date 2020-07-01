import React from 'react';
import Container from './container';
import Menu from './Menu';

const Template = ({ children }: { children: any }) => {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
};

export default Template;
