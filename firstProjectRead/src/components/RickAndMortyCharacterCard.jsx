import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css';

function RickAndMortyCharacterCard (props) {

    const rickAndMortyCharacterId = props.id;
    const [personaje, setPersonaje] = useState({})
  
    useEffect( () => {
    
        fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
        .then((response) => response.json())
        .then((result) => setPersonaje(result))
    }, [])


    return (
        <div className="card">
        <div className="personaje">
            <img className='imagen_personaje' src={personaje.image} alt="Foto de el personaje" /><br />
            <div className="detalles">
                <h3>{personaje.name}</h3><br />
                <p>
                    <b>Genero:</b> {personaje.gender}
                </p>
                <p>
                    <b>Estado:</b> {personaje.status}
                </p>
            </div>
        </div>
    </div>
    )
}
export default RickAndMortyCharacterCard
