import React from 'react';
import '../App.css';
import cinema from '../assets/cinema.jpg'

function EpisodeCard(props) {
  console.log(props.title)
  return (

        <div className="card2">
            <div className="episode">
            <img className='cinema' src={cinema} alt="Foto de el personaje" /><br />
                <div className="detalles">
                    
                    <h3>{props.title}</h3><br />
                    <p>
                        <b></b> {props.epi}
                    </p>
                    <p>
                        <b>Date:</b> {props.date}
                    </p>
                </div>
            </div>
        </div>
  );
}


export default EpisodeCard;