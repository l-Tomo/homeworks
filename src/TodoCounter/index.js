import React from 'react'; // Importa la librería React.
import { TodoContext } from '../TodoContext'; // Importa el contexto TodoContext desde su archivo.
import './TodoCounter.css'; // Importa el archivo de estilos CSS para el componente.

function TodoCounter() { // Define el componente funcional TodoCounter.
  const { // Usa el hook useContext para extraer valores del contexto TodoContext.
    completedTodos, // Número de tareas completadas.
    totalTodos, // Número total de tareas.
  } = React.useContext(TodoContext); // Obtiene los valores desde el contexto TodoContext.
  
  return ( // Devuelve el JSX que define la interfaz de usuario.
    <h1 className="TodoCounter"> {/* Asigna la clase CSS "TodoCounter" al elemento h1. */}
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs {/* Muestra el número de tareas completadas y el número total de tareas. */}
    </h1>
  );
}

export { TodoCounter }; // Exporta el componente TodoCounter.
