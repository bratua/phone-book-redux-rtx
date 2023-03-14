import { ContactsList } from 'components/ContactsList';
import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <h1>Phone Book</h1>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/contacts-list">Contacts List</NavLink>
      </nav>

      <Routes>
        <Route path="/contacts-list" element={<ContactsList />} />
      </Routes>
    </>
  );
};
