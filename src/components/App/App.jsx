import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { AddContact } from 'pages/AddContact';
import { Modal } from 'components/Modal';
import styled from 'styled-components';

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;

  return (
    <>
      <h1>Phone Book</h1>

      <nav>
        <StyledLink to="/ContactsList"> - Contacts List - </StyledLink>
        <StyledLink to="/AddContact"> - AddContact - </StyledLink>
        {/* <StyledLink to="/Home"> - Home - </StyledLink> */}
        {/* <StyledLink to="/Editor"> - Editor - </StyledLink> */}
        {/* <StyledLink to="/Modal"> - Modal - </StyledLink> */}
      </nav>

      <Routes>
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/ContactsList" element={<Contacts />} />
        <Route path="/AddContact" element={<AddContact />} />
        {/* <Route path="/Modal" element={<Modal />} /> */}
      </Routes>
    </>
  );
};
