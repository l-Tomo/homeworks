import { TodoCounter } from '../TodoCounter'; // Importa el componente TodoCounter
import { TodoSearch } from '../TodoSearch'; // Importa el componente TodoSearch
import { TodoList } from '../TodoList'; // Importa el componente TodoList
import { TodoItem } from '../TodoItem'; // Importa el componente TodoItem
import { TodosLoading } from '../TodosLoading'; // Importa el componente TodosLoading
import { TodosError } from '../TodosError'; // Importa el componente TodosError
import { EmptyTodos } from '../EmptyTodos'; // Importa el componente EmptyTodos
import { CreateTodoButton } from '../CreateTodoButton'; // Importa el componente CreateTodoButton

// Define el componente AppUI que recibe props
function AppUI({
  loading, // Estado de carga
  error, // Estado de error
  completedTodos, // Número de tareas completadas
  totalTodos, // Número total de tareas
  searchValue, // Valor de búsqueda
  setSearchValue, // Función para actualizar el valor de búsqueda
  searchedTodos, // Lista de tareas filtradas por la búsqueda
  completeTodo, // Función para completar una tarea
  deleteTodo, // Función para eliminar una tarea
}) {
  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && ( // Muestra componentes de carga si está cargando
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => ( // Mapea las tareas filtradas para mostrar cada TodoItem
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton /> 
    </>
  );
}

export { AppUI }; // Exporta el componente AppUI
