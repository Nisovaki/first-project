/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import { Container } from "../Container/Container.jsx";
import s from './Header.module.scss';

export const Header = () => (
  <header className="{s.header}">
    <Container>
      <div className="{s.logo}">
        <Logo />
      </div>
      <div className="{s.search}">
        <SearchForm />
      </div>
      <div className="{s.navigation}">
        <Navigation />
      </div>
    </Container>
  </header>
);
