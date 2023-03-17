import {
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactSlice';
import { useModal } from 'components/Modal/hooks';
import { ModalWindow } from 'components/Modal/';
import { Editor } from 'components/Editor';

export const ContactCard = ({ contact: { id, name, phoneNumber } }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { data: contact, result } = useGetContactByIdQuery(id);
  const { isOpen, open, close } = useModal();

  return (
    <li>
      <h2>Name: {name}</h2>
      <p>Phone: {phoneNumber}</p>
      <button type="button" onClick={() => open()} disabled={isLoading}>
        Edit
      </button>

      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        disabled={isLoading}
      >
        Delete
      </button>

      {isOpen && (
        <ModalWindow isOpen={isOpen} onClose={close}>
          <Editor onClose={close} contact={contact} />
        </ModalWindow>
      )}
    </li>
  );
};
