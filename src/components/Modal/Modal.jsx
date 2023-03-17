import { useModal } from './hooks';
import { ModalWindow } from './ModalWindow';
import { Editor } from 'components/Editor';

export const Modal = ({ contact }) => {
  const { isOpen, open, close } = useModal();

  return (
    <>
      {!isOpen && (
        <button type="button" onClick={open}>
          OPEN
        </button>
      )}

      {isOpen && (
        <ModalWindow isOpen={isOpen} onClose={close}>
          <Editor contact={contact} onClose={close} />
        </ModalWindow>
      )}
    </>
  );
};
