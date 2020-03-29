import React from 'react';
import {useCallback, useEffect, useState} from 'react';

import ClickableListItem from './user/ClickableListItem';

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

  if (error !== null) {
    return `Error: ${error.message}`;
  } else if (users === null) {
    return 'Loading...';
  } else {
    return (
      <div>
        <label>
          Select User
          <input
            onChange={handleUserSearch}
            type="search"
            value={query || ''}
          />
        </label>
        {filteredUsers.map(({id, name}) => (
          <ClickableListItem
            key={id}
            onClick={onSelectUser(id)}
            item={name}
          />
        ))}
      </div>
    );
  }
}
 export default LandingPage;
