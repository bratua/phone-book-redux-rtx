import { Editor } from 'components/Editor';
import { useNavigate } from 'react-router-dom';

export const AddContact = () => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate('/ContactsList');
  };
  return (
    <>
      <Editor onClose={onClose} />
    </>
  );
};
