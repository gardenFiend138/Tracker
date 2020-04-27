import React from 'react';
import {useCallback, useState} from 'react';

import Button from '../common/Button';
import Input from '../common/Input';

import {
  USER_TASK_DISPLAY_TYPES,
  USER_TASK_TYPE_ENUM,
} from './constants/task_constants';

function NewTaskForm() {
  const [title, setTitle] = useState('');

  const handleUserInput = useCallback(({target: {value}}) => {
    setTitle(value);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log('title is: ', title);
  }, [title]);

  return (
    <div>
      <div>Create a New Task</div>
      <Input
        label={USER_TASK_DISPLAY_TYPES.TITLE}
        onChange={handleUserInput}
      />
      <Button
        isDisabled={title.trim().length === 0}
        onClick={handleSubmit}
        text="Create New Task"
      />
    </div>
  );
}
 export default NewTaskForm;
