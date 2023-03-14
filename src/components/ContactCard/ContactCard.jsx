export const ContactCard = ({ name, phone }) => {
  return (
    <li>
      <h2>Name: {name}</h2>
      <p>Phone: {phone}</p>
      <button type="button">Edit</button>
      <button type="button">Delete</button>
    </li>
  );
};
