import React from 'react';
import {Link} from 'react-router-dom';

function ClickableListItemLink({item, path}) {
  return (
    <li>
      <Link to={path}>{item}</Link>
    </li>
  );
}

export default ClickableListItemLink;
