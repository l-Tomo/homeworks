import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';


function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          console.log(openModal)
          setOpenModal(event.target=true)
          console.log(openModal)
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };
