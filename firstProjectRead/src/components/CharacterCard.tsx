import React from 'react';
import '../App.css';

function CharacterCard(props) {
  
  return (

        <div className="card">
            <div className="personaje">
                <img className='imagen_personaje' src={props.url} alt="Foto de el artista/personaje" /><br />
                <div className="detalles">
                    <h3>{props.title}</h3><br />
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