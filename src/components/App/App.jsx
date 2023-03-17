import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { AddContact } from 'pages/AddContact';
import { Modal } from 'components/Modal';

export const App = () => {
  return (
    <>
      <h1>Phone Book</h1>

      <nav>
        <NavLink to="/AddContact"> - AddContact - </NavLink>
        <NavLink to="/Home"> - Home - </NavLink>
        <NavLink to="/ContactsList"> - Contacts List - </NavLink>
        <NavLink to="/Editor"> - Editor - </NavLink>
        <NavLink to="/Modal"> - Modal - </NavLink>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/ContactsList" element={<Contacts />} />
        <Route path="/AddContact" element={<AddContact />} />
        <Route path="/Modal" element={<Modal />} />
      </Routes>
    </>
  );
};
