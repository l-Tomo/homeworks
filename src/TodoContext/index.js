import React from 'react'; // Importa la librería React.
import { useLocalStorage } from './useLocalStorage'; // Importa el hook personalizado useLocalStorage.

const TodoContext = React.createContext(); // Crea el contexto TodoContext usando React.createContext().

function TodoProvider({ children }) { // Define el componente funcional TodoProvider que acepta children como props.
  const { // Usa el hook useLocalStorage para gestionar los TODOS en el local storage.
    item: todos, // Obtiene los TODOS desde el local storage.
    saveItem: saveTodos, // Función para guardar los TODOS en el local storage.
    loading, // Estado de carga.
    error, // Estado de error.
  } = useLocalStorage('TODOS_V1', []); // Inicializa el hook useLocalStorage con la clave 'TODOS_V1' y un valor inicial vacío.
  
  const [searchValue, setSearchValue] = React.useState(''); // Estado para gestionar el valor de búsqueda.

  const completedTodos = todos.filter( // Calcula el número de tareas completadas.
    todo => !!todo.completed
  ).length;
  
  const totalTodos = todos.length; // Calcula el número total de tareas.

  const searchedTodos = todos.filter( // Filtra las tareas según el valor de búsqueda.
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => { // Marca una tarea como completada.
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true; // Cambia el estado de completado a true.
    saveTodos(newTodos); // Guarda los cambios en el local storage.
  };

  const deleteTodo = (text) => { // Elimina una tarea.
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1); // Elimina la tarea del array.
    saveTodos(newTodos); // Guarda los cambios en el local storage.
  };
  
  return ( // Devuelve el proveedor de contexto.
    <TodoContext.Provider value={{ // Provee los valores y funciones del contexto.
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }}>
      {children} {/* Renderiza los componentes hijos que están envueltos por el proveedor. */}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }; // Exporta el contexto y el proveedor de contexto.
