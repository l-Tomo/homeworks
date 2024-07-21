import React from 'react';
import { AppUI } from './AppUI'; // Importa el componente AppUI
import { useLocalStorage } from './useLocalStorage'; // Importa el hook useLocalStorage

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  // Usa el hook useLocalStorage para manejar los todos, estado de carga y errores
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState(''); // Estado para el valor de búsqueda

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length; // Calcula el número de tareas completadas
  
  const totalTodos = todos.length; // Calcula el número total de tareas

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText); // Filtra las tareas según el valor de búsqueda
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Alterna el estado de completado
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1); // Elimina la tarea
    saveTodos(newTodos);
  };
  
  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App; // Exporta el componente App
