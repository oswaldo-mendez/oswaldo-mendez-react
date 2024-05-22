import React from 'react';
import '../App.css';

function CharacterCard(props) {
  
  return (

        <div className="card">
            <div className="personaje">
                <img className='imagen_personaje' src={props.url} alt="Foto de el artista/personaje" />;
                <div className="detalles">
                    <h1>{props.title}</h1>;
                    <p>
                        <b>Genero:</b> {props.genre}
                    </p>
                    <p>
                        <b>Estado:</b> {props.status}
                    </p>
                </div>
            </div>
        </div>
  );
}


export default CharacterCard;