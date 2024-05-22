import React from 'react';


function CharacterCard(props) {
  
  return (

    <div>
      <h1>{props.title}</h1>;
      <img src={props.url} alt="Foto de el artista/personaje" />;
      <p>
        <b>Genero:</b> {props.genre}
        </p>
        <p>
          <b>Estado:</b> {props.status}
        </p>
    </div>
  );
}


export default CharacterCard;