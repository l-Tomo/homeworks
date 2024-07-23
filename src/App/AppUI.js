import React from 'react'; // Importa la librería React.
import { TodoCounter } from '../TodoCounter'; // Importa el componente TodoCounter desde su archivo.
import { TodoSearch } from '../TodoSearch'; // Importa el componente TodoSearch desde su archivo.
import { TodoList } from '../TodoList'; // Importa el componente TodoList desde su archivo.
import { TodoItem } from '../TodoItem'; // Importa el componente TodoItem desde su archivo.
import { TodosLoading } from '../TodosLoading'; // Importa el componente TodosLoading desde su archivo.
import { TodosError } from '../TodosError'; // Importa el componente TodosError desde su archivo.
import { EmptyTodos } from '../EmptyTodos'; // Importa el componente EmptyTodos desde su archivo.
import { CreateTodoButton } from '../CreateTodoButton'; // Importa el componente CreateTodoButton desde su archivo.
import { TodoContext } from '../TodoContext'; // Importa el contexto TodoContext desde su archivo.
import { Modal } from '../Modal/index'
import { TodoForm } from '../TodoForm';

function AppUI() { // Define el componente funcional AppUI.
  const { // Usa el hook useContext para extraer valores del contexto TodoContext.
    loading, // Estado de carga.
    error, // Estado de error.
    searchedTodos, // Lista de tareas filtradas por la búsqueda.
    completeTodo, // Función para marcar una tarea como completada.
    deleteTodo, // Función para eliminar una tarea.
    openModal, // abre modal 
  } = React.useContext(TodoContext); // Obtiene los valores desde el contexto TodoContext.
  
  return ( // Devuelve el JSX que define la interfaz de usuario.
    <> {/* Fragmento vacío que agrupa múltiples elementos JSX sin añadir un nodo extra al DOM */}
      <TodoCounter /> {/* Renderiza el componente TodoCounter */}
      <TodoSearch /> {/* Renderiza el componente TodoSearch */}

      <TodoList> {/* Renderiza el componente TodoList */}
        {loading && ( // Si está en estado de carga, muestra varios componentes TodosLoading.
          <>
            <TodosLoading /> {/* Renderiza el componente TodosLoading */}
            <TodosLoading /> {/* Renderiza otro componente TodosLoading */}
            <TodosLoading /> {/* Renderiza otro componente TodosLoading */}
          </>
        )}
        {error && <TodosError/>} {/* Si hay un error, muestra el componente TodosError */}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />} {/* Si no está cargando y no hay tareas filtradas, muestra el componente EmptyTodos */}

        {searchedTodos.map(todo => ( // Mapea las tareas filtradas y renderiza un componente TodoItem por cada una.
          <TodoItem
            key={todo.text} // Usa el texto de la tarea como clave.
            text={todo.text} // Pasa el texto de la tarea como prop.
            completed={todo.completed} // Pasa el estado de completado como prop.
            onComplete={() => completeTodo(todo.text)} // Pasa la función onComplete que llama a completeTodo con el texto de la tarea.
            onDelete={() => deleteTodo(todo.text)} // Pasa la función onDelete que llama a deleteTodo con el texto de la tarea.
          />
        ))}
      </TodoList>
      
      <CreateTodoButton /> {/* Renderiza el componente CreateTodoButton */}
      
      {openModal && (
        <Modal>
          <TodoForm  />
        </Modal>
      )}
    </>
  );
}

export { AppUI }; // Exporta el componente AppUI.
