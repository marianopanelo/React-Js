/* eslint-disable react/prop-types */

const Boton = ({ pestaña }) => {
    const accion = () => alert(`Entraste en ${pestaña}`);
    
    return (
      <div>
        <button onClick={accion} className="navegar">
          {pestaña}
        </button>
      </div>
    );
  };
  
export default Boton;