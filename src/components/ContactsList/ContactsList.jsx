import { useGetAllContactsQuery } from 'redux/contactSlice';
import { ContactCard } from 'components/ContactCard';
import { useModal } from 'components/Modal/hooks';
import { ModalWindow } from 'components/Modal/';
import { Editor } from 'components/Editor';

export const ContactsList = () => {
  const {
    data: contacts,
    error,
    isSuccess,
    isFetching,
  } = useGetAllContactsQuery();

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
      <ol>
        {isSuccess &&
          contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
      </ol>
    </>
  );
};
