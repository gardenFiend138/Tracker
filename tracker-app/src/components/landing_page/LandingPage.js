import React from 'react';
import {useCallback, useEffect, useState} from 'react';

import ClickableListItem from './user/ClickableListItem';
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
    console.log('id is: ', id);
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
          <ClickableListItem
            key={id}
            onClick={onSelectUser(id)}
            item={name}
          />
        ))}
        <NewUserForm onSuccess={updateUsers} />
      </div>
    );
  }
}
 export default LandingPage;
