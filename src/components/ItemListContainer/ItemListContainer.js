import React from 'react';
import Comentario from './Comentario';
import '../../style.css';
import Crema from '../../imagenes/crema.jpg'
import Perfume from '../../imagenes/perfume.jpg'
import Maquillaje from '../../imagenes/maquillaje.jpg'


const comentarios = [
    {
        nombre: 'Perfumes',
        mensaje: 'Muchos perfumes',
        imagen: Perfume
    },
    {
        nombre: 'Cremas',
        mensaje: 'Too Muchas cremas',
        imagen: Crema
    },
    {
        nombre: 'Maquillaje',
        mensaje: 'Muchos Maquillaje',
        imagen: Maquillaje
    }

];

const renderComentarios = onSeleccionarComentario => {
    return comentarios.map(comentario => {
        return (
            <Comentario
                nombre={comentario.nombre}
                comentario={comentario.mensaje}
                imagen={comentario.imagen}
                onSeleccionar={() => onSeleccionarComentario(comentario.imagen)}
            />
        );
    });
};


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mensajeActual: null };
    }

    onSeleccionarComentario(imagen) {
        this.setState({ mensajeActual: imagen });
    }

    render() {
        return (
            <div>
                

            <div>{this.props.children}</div>
                {renderComentarios(this.onSeleccionarComentario.bind(this))} 
                <img className="imagenes" src={this.state.mensajeActual}/>
            </div>
        );
    }
}

export default Item;
