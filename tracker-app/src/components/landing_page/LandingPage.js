import React from 'react';
import {useCallback, useEffect, useState} from 'react';

import ClickableListItemLink from './user/ClickableListItemLink';
import Input from '../common/Input';
import NewUserForm from './user/NewUserForm';

import {fetchAllUsers} from '../../api/users';

function LandingPage() {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(users || []);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (users === null) {
      fetchAllUsers()
        .then((users) => {
          setUsers(users);
          setFilteredUsers(users);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [users]);

  const onSelectUser = useCallback((id) => () => {

  }, []);

  const handleUserSearch = useCallback(({target: {value}}) => {
    const filteredUsers = users.filter(({name}) => name.includes(value));
    setFilteredUsers(filteredUsers);
    setQuery(value);
  }, [users]);

  const updateUsers = useCallback((user) => {
    const newUsers = [user].concat(users);
    setUsers(newUsers);
    setFilteredUsers(newUsers);
    setQuery('');
  }, [users]);

  if (error !== null) {
    return `Error: ${error.message}`;
  } else if (users === null) {
    return 'Loading...';
  } else {
    return (
      <div>
        <Input
          onChange={handleUserSearch}
          label="Select User"
          type="search"
          value={query || ''}
        />
        {filteredUsers.map(({id, name}) => (
          <ClickableListItemLink
            key={id}
            item={name}
            path={`/users/tasks/${id}`}
          />
        ))}
        <NewUserForm onSuccess={updateUsers} />
      </div>
    );
  }
}
 export default LandingPage;
