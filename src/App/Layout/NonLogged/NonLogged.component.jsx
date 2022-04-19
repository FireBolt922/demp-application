import React from 'react';
import { LayoutWrapper } from './NonLogged.styled';

function NonLogged({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default NonLogged;
