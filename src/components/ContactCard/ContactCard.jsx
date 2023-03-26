import {
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactSlice';
import { useModal } from 'components/Modal/hooks';
import { ModalWindow } from 'components/Modal/';
import { Editor } from 'components/Editor';
import { ContactCardStyled } from 'components/ContactCard';
import { FiEdit2, FiTrash2, FiSave } from 'react-icons/fi';

export const ContactCard = ({ contact: { id, name, phoneNumber } }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { data: contact, result } = useGetContactByIdQuery(id);
  const { isOpen, open, close } = useModal();

  return (
    <ContactCardStyled>
      <div>
        <p>Name: {name}</p>
        <p>Phone: {phoneNumber}</p>
      </div>
      <button type="button" onClick={() => open()} disabled={isLoading}>
        {<FiEdit2 size="20" />}
      </button>

      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        disabled={isLoading}
      >
        {<FiTrash2 size="20" />}
      </button>

      {isOpen && (
        <ModalWindow isOpen={isOpen} onClose={close}>
          <Editor onClose={close} contact={contact} />
        </ModalWindow>
      )}
    </ContactCardStyled>
  );
};
