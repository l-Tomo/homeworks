import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'rgba(9, 245, 38, 1)'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
