import "./App.css";
import Testimonio from "./componentes/Testimonio";
import data from "./JSON/Testimonios.json";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {data.testimonios.map((testimonio) => (
          <Testimonio
            imagen={testimonio.imagen}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
