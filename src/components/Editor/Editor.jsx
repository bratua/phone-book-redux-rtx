import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema.js';
import {
  useAddContactMutation,
  useUpdateContactMutation,
} from 'redux/contactSlice';
// import { useModal } from 'components/Modal/hooks';

const editorInitialValues = {
  name: '',
  phone: '',
  title: 'Add new contact',
};

export const Editor = ({ contact, onClose }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm();

  // const { close } = useModal();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [contactName, setContactName] = useState(editorInitialValues.name);
  const [contactPhone, setContactPhone] = useState(editorInitialValues.phone);
  const [formTitle, setTitle] = useState(editorInitialValues.title);

  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const nameId = nanoid();
  const phoneId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'contactName':
        setContactName(value);
        break;

      case 'contactPhone':
        setContactPhone(value);
        break;

      default:
        break;
    }
  };

  const add = ({ contactName, contactPhone }) => {
    addContact({ name: contactName, phoneNumber: String(contactPhone) });
    onClose();
  };

  const update = ({ contactName, contactPhone }) => {
    updateContact({
      name: contactName,
      phoneNumber: String(contactPhone),
      id: contact.id,
    });
    onClose();
  };

  const onSubmit = () => {
    if (contact) {
      return update;
    }
    return add;
  };

  useEffect(() => {
    if (contact) {
      setContactName(contact.name);
      setContactPhone(contact.phoneNumber);
      setTitle('Edit Contact');
    }
  }, [contact]);

  useEffect(() => {
    setValue('contactName', `${contactName}`);
    setValue('contactPhone', `${contactPhone}`);
  }, [contactName, contactPhone, setValue]);

  return (
    <>
      <h2>{formTitle}</h2>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit())}>
        <label htmlFor={nameId}>
          Name
          {/* <input
            {...register('contactName', {
              required: true,
              pattern:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            })}
            onChange={handleInputChange}
            id={nameId}
            autoFocus
            placeholder="Input contact name"
          /> */}
          <input
            {...register('contactName', {
              required: true,
            })}
            onChange={handleInputChange}
            id={nameId}
            autoFocus
            placeholder="Input contact name"
          />
          <p>{errors.contactName && 'Input correct name'}</p>
        </label>

        <label htmlFor={phoneId}>
          Phone
          {/* <input
            {...register('contactPhone', {
              required: true,
              pattern:
                /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/,
            })}
            onChange={handleInputChange}
            id={nameId}
            placeholder="Input phone number"
          /> */}
          <input
            {...register('contactPhone', {
              required: true,
            })}
            onChange={handleInputChange}
            id={nameId}
            placeholder="Input phone number"
          />
          <p>{errors.contactPhone && 'Input correct phone number'}</p>
        </label>

        <button type="submit">{formTitle}</button>
      </form>
    </>
  );
};
