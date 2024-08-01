import React from 'react'; // Importa la librería React.
import { useLocalStorage } from './useLocalStorage'; // Importa el hook personalizado useLocalStorage.

const TodoContext = React.createContext(); // Crea un nuevo contexto de React para las tareas.

function TodoProvider({ children }) { // Define el componente funcional TodoProvider que recibe children como prop.
  const { // Usa el hook useLocalStorage para manejar el estado de las tareas.
    item: todos, // Renombra 'item' a 'todos'.
    saveItem: saveTodos, // Renombra 'saveItem' a 'saveTodos'.
    loading, // Estado de carga.
    error, // Estado de error.
  } = useLocalStorage('TODOS_V1', []); // Inicializa el almacenamiento local con la clave 'TODOS_V1' y un valor inicial vacío.
  
  const [searchValue, setSearchValue] = React.useState(''); // Estado para el valor de búsqueda.
  const [openModal, setOpenModal] = React.useState(false); // Estado para controlar la apertura del modal.

  const completedTodos = todos.filter( // Calcula el número de tareas completadas.
    todo => !!todo.completed // Filtra las tareas que están completadas.
  ).length;
  const totalTodos = todos.length; // Calcula el número total de tareas.

  const searchedTodos = todos.filter( // Filtra las tareas basándose en el valor de búsqueda.
    (todo) => {
      const todoText = todo.text.toLowerCase(); // Convierte el texto de la tarea a minúsculas.
      const searchText = searchValue.toLowerCase(); // Convierte el valor de búsqueda a minúsculas.
      return todoText.includes(searchText); // Comprueba si el texto de la tarea incluye el valor de búsqueda.
    }
  );

  const addTodo = (text) => { // Función para añadir una nueva tarea.
    const newTodos = [...todos]; // Crea una copia del array de tareas.
    newTodos.push({ // Añade la nueva tarea al array.
      text, // Texto de la tarea.
      completed: false, // Marca la tarea como no completada.
    });
    saveTodos(newTodos); // Guarda las tareas actualizadas en el almacenamiento local.
  };

  const completeTodo = (text) => { // Función para marcar una tarea como completada.
    const newTodos = [...todos]; // Crea una copia del array de tareas.
    const todoIndex = newTodos.findIndex( // Encuentra el índice de la tarea a completar.
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  saveTodos(newTodos); // Guarda las tareas actualizadas en el almacenamiento local.
  };

  const deleteTodo = (text) => { // Función para eliminar una tarea.
    const newTodos = [...todos]; // Crea una copia del array de tareas.
    const todoIndex = newTodos.findIndex( // Encuentra el índice de la tarea a eliminar.
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1); // Elimina la tarea del array.
    saveTodos(newTodos); // Guarda las tareas actualizadas en el almacenamiento local.
  };

  return ( // Devuelve el proveedor del contexto con los valores proporcionados.
    <TodoContext.Provider value={{
      loading, // Estado de carga.
      error, // Estado de error.
      completedTodos, // Número de tareas completadas.
      totalTodos, // Número total de tareas.
      searchValue, // Valor de búsqueda.
      setSearchValue, // Función para actualizar el valor de búsqueda.
      searchedTodos, // Tareas filtradas por búsqueda.
      addTodo, // Función para añadir una tarea.
      completeTodo, // Función para completar una tarea.
      deleteTodo, // Función para eliminar una tarea.
      openModal, // Estado para controlar la apertura del modal.
      setOpenModal, // Función para actualizar el estado del modal.
    }}>
      {children} {/* Renderiza los componentes hijos */}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }; // Exporta el contexto y el proveedor.
