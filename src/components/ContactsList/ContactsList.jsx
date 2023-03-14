import { useGetAllContactsQuery } from 'redux/contactSlice';
import { ContactCard } from 'components/ContactCard';

export const ContactsList = () => {
  const {
    data: contacts,
    error,
    isSuccess,
    isFetching,
  } = useGetAllContactsQuery();

  return (
    <>
      {isFetching && 'Loading...'}
      <ul>
        {isSuccess &&
          contacts.map(contact => (
            <ContactCard
              key={contact.id}
              name={contact.name}
              phone={contact.phoneNumber}
            />
          ))}
      </ul>
    </>
  );
};
