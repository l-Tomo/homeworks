import React from 'react'; // Importa la librería React.
import { TodoContext } from '../TodoContext'; // Importa el contexto TodoContext desde su archivo.
import './TodoSearch.css'; // Importa el archivo de estilos CSS para el componente.

function TodoSearch() { // Define el componente funcional TodoSearch.
  const { // Usa el hook useContext para extraer valores del contexto TodoContext.
    searchValue, // Valor actual del campo de búsqueda.
    setSearchValue, // Función para actualizar el valor del campo de búsqueda.
  } = React.useContext(TodoContext); // Obtiene los valores desde el contexto TodoContext.
  
  return ( // Devuelve el JSX que define la interfaz de usuario.
    <input
      placeholder="Recorrer el yermo" // Placeholder que aparece cuando el input está vacío.
      className="TodoSearch" // Asigna la clase CSS "TodoSearch" al input.
      value={searchValue} // Asigna el valor del input al valor de búsqueda actual.
      onChange={(event) => { // Maneja el evento de cambio en el input.
        setSearchValue(event.target.value); // Actualiza el valor de búsqueda con el nuevo valor ingresado.
      }}
    />
  );
}

export { TodoSearch }; // Exporta el componente TodoSearch.
