import React from 'react';



const Comentario = ({ nombre, comentario, onSeleccionar }) => {
  return (
    <div className="contenedor">
      <img className ="imagen"
        style={{ objectFit: 'cover' }}
        src="https://www.maquilleo.com/blog/wp-content/uploads/2019/10/tienda-de-maquillaje-online-post.png"
      />
      <div className="contenido">
        <div style={{ fontWeight: 900 }}>{nombre}</div>
        <div>{comentario}</div>
      </div>
      <button onClick={onSeleccionar}>Ver</button>
    </div>
  );
};

export default Comentario;
