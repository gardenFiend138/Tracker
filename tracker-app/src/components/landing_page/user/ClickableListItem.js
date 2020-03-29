import React from 'react';

function ClickableListItem({item, onClick}) {
  return (
    <div onClick={onClick}>{item}</div>
  );
}

export default ClickableListItem;
