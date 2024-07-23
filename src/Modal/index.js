import React from "react"; // Importa la librería React.
import ReactDOM from 'react-dom'; // Importa ReactDOM de 'react-dom' para trabajar con el DOM.
import './Modal.css'; // Importa el archivo de estilos CSS para el componente Modal.

function Modal({ children }) { // Define el componente funcional Modal que recibe children como prop.
    return ReactDOM.createPortal( // Utiliza ReactDOM.createPortal para renderizar los hijos en un nodo diferente del DOM.
        <div className="ModalBackground">                      
            {children} 
        </div>,
        document.getElementById('modal') // Especifica el nodo del DOM donde se montará el portal (un elemento con id 'modal').
    );
}

export { Modal }; // Exporta el componente Modal.
