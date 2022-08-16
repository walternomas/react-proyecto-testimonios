import '../hojas-de-estilo/Testimonio.css';
import parse from "html-react-parser";

function Testimonio({imagen,nombre,pais,cargo,empresa,testimonio}) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${imagen}.png`)} 
        alt={`Foto de ${nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{nombre}</strong> en {pais}</p>
        <p className='cargo-testimonio'>{cargo} en <strong>{empresa}</strong></p>
        <p className='texto-testimonio'>{parse(testimonio)}</p>
      </div>
    </div>
  );
}

export default Testimonio;