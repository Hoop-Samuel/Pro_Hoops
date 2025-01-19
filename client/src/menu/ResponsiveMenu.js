import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Menu from './Menu';
import HamburgerMenu from './HamburgerMenu';

const ResponsiveMenu = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return isMobile ? <HamburgerMenu /> : <Menu />;
};

export default ResponsiveMenu;
