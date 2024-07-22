import React from 'react';

// Define el hook useLocalStorage
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue); // Estado para el item
  const [loading, setLoading] = React.useState(true); // Estado de carga
  const [error, setError] = React.useState(false); // Estado de error
  
  // useEffect para simular la carga desde localStorage
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue)); // Si no hay item en localStorage, inicializa con initialValue
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem); // Parsea el item de localStorage
          setItem(parsedItem); // Actualiza el estado con el item parseado
        }
  
        setLoading(false); // Cambia el estado de carga a false
      } catch(error) {
        setLoading(false); // Cambia el estado de carga a false
        setError(true); // Cambia el estado de error a true
      }
    }, 2000); // Simula una demora de 2 segundos
  }, [itemName, initialValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem)); // Guarda el nuevo item en localStorage
    setItem(newItem); // Actualiza el estado con el nuevo item
  };

  return {
    item, // Devuelve el item
    saveItem, // Devuelve la función para guardar el item
    loading, // Devuelve el estado de carga
    error, // Devuelve el estado de error
  };
}

export { useLocalStorage }; // Exporta el hook useLocalStorage
