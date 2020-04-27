import React from 'react';
import {useCallback, useMemo, useState} from 'react';

import Button from '../../common/Button';
import Input from '../../common/Input';

import {createUser} from '../../../api/users';

import {
  USER_FORM_DISPLAY_TYPES,
  USER_FORM_TYPE_ENUM,
} from './constants/user_constants';

function NewUserForm({onSuccess}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const handleUserInput = useCallback(
    (inptutType) => ({target: {value}}) => {
    switch (inptutType) {
      case USER_FORM_TYPE_ENUM.NAME:
        setName(value);
        break;
      case USER_FORM_TYPE_ENUM.EMAIL:
        setEmail(value);
        break;
      case USER_FORM_TYPE_ENUM.PHONE_NUMBER:
        setPhoneNumber(value);
        break;
      default:
        throw new Error('Unexpected type in handleUserInput');
    }
  }, []);

  const handleSubmit = useCallback(() => {
    createUser({name, email, phoneNumber})
      .then((data) => {
        onSuccess(data);
        setName('');
        setEmail('');
        setPhoneNumber('');
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [email, name, onSuccess, phoneNumber]);

  const isSubmitDisabled = useMemo(() => (
    name.trim().length === 0 ||
      email.trim().length === 0 ||
      phoneNumber.trim().length === 0
  ), [name, email, phoneNumber]);

  return (
    <div>
      {error !== null &&
        <div>{`There was an error creating your user: ${error}`}</div>
      }
      <div>Create a New User</div>
      <Input
        label={USER_FORM_DISPLAY_TYPES.NAME}
        onChange={handleUserInput(USER_FORM_TYPE_ENUM.NAME)}
      />
      <Input
        label={USER_FORM_DISPLAY_TYPES.EMAIL}
        onChange={handleUserInput(USER_FORM_TYPE_ENUM.EMAIL)}
        type="email"
      />
      <Input
        label={USER_FORM_DISPLAY_TYPES.PHONE_NUMBER}
        onChange={handleUserInput(USER_FORM_TYPE_ENUM.PHONE_NUMBER)}
        type="tel"
      />
      <Button
        isDisabled={isSubmitDisabled}
        onClick={handleSubmit}
        text="Create New User"
      />
    </div>
  );
}

export default NewUserForm;
