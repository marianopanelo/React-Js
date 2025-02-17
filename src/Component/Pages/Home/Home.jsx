import { Link } from "react-router";


const Home = () => {
    return (
      <div className="home-container">
        <section className="banner">
          <h1>¡Encuentra lo mejor en tecnología!</h1>
          <p>Los mejores precios en periféricos, componentes y accesorios y extras.</p>
        </section>
  
        {/* Categorías Destacadas */}
        <section className="categories">
          <h2>Categoría Destacada</h2>
          <div className="category-grid">
            <div className="category">
              <Link to={`/categoria/periféricos`}><h3>Periféricos</h3></Link>
            </div>
          </div>
        </section>
  
        {/* Sección de Ofertas */}
        <section className="offers">
          <h2>🔥 Ofertas de la Semana 🔥</h2>
          <p>Aprovecha descuentos exclusivos en productos seleccionados.</p>
        </section>
      </div>
    );
  };
  
  export default Home;