import React from 'react'
import { Container } from "@chakra-ui/react";

import Logo from '../../shared/Logo/Logo'
import MobileNav from "./MobileNav";

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Container maxW="2xl" centerContent>
        <Logo />
        <MobileNav />
      </Container>
    </header>
  );
}

export default Header