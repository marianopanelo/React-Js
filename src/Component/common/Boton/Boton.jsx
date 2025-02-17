/* eslint-disable react/prop-types */

const Boton = ({ pestaña }) => {
    
    return (
      <div>
        <button className="navegar">
          {pestaña}
        </button>
      </div>
    );
  };
  
export default Boton;