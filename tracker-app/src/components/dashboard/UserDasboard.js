import React from 'react';
import {useCallback, useEffect, useState} from 'react';

import NewTaskForm from './NewTaskForm';

import {fetchAllTasks} from '../../api/tasks';

function UserDasboard() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (tasks === null) {
      fetchAllTasks()
        .then((data) => {
          setTasks(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [tasks]);

  return (
    <div>
      {error !== null &&
        <div>`Error fetching your tasks: ${error}`</div>
      }
      {(tasks || []).map((task) => {
        return <div key={task.id}>{task.title}</div>
      })}
      <NewTaskForm />
    </div>
  );
}

export default UserDasboard;
