import { useGetAllContactsQuery } from 'redux/contactSlice';
import { useSelector } from 'react-redux';
import { ContactCard } from 'components/ContactCard';
import { useModal } from 'components/Modal/hooks';
import { ModalWindow } from 'components/Modal/';
import { Editor } from 'components/Editor';
import { Filter } from 'components/Filter';
import { ContactListStyled } from 'components/ContactCard';

export const ContactsList = () => {
  const {
    data: contacts,
    error,
    isSuccess,
    isFetching,
  } = useGetAllContactsQuery();
  const filterData = useSelector(
    state => state.filter.filterData
  ).toLowerCase();

  const filtredContacts = () => {
    if (contacts) {
      console.log(contacts);
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterData)
      );
    }
  };

  console.log('filtredContacts', filtredContacts());

  const { isOpen, open, close } = useModal();

  return (
    <>
      <button type="button" onClick={open}>
        Add new contact
      </button>

      {isOpen && (
        <ModalWindow isOpen={isOpen} onClose={close}>
          <Editor onClose={close} />
        </ModalWindow>
      )}

      {isFetching && 'Loading...'}
      {isSuccess && contacts.length > 0 && <Filter />}

      <ContactListStyled>
        {isSuccess &&
          filtredContacts().map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
      </ContactListStyled>
    </>
  );
};
