const NotFound = () => {
    return (
      <div className="error-container">
        <h1>⚠️ Error 404</h1>
        <p>Oops! La página que buscas no se encuentra.</p>
        <p>Verifica la URL o vuelve al inicio.</p>
        <a href="/" className="back-home">🏠 Volver al inicio</a>
      </div>
    );
  };
  
  export default NotFound;
  
