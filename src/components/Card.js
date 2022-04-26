import React from "react";
import '../styles/card.css'

const Card = ({ name, id, email}) => {
    return (
        <div className='dib br3 pa2 ma2 grow bw2 shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;