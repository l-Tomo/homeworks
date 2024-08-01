import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="rgba(9, 245, 38, 1)"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
