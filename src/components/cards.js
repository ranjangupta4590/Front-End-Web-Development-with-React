import React from 'react';

export default function Cards(props) {
    return (
        <div className='Card container'>
            <img src={`${props.image}`} className="card_img" />
            <div>
                <h4>{props.name}</h4>
                <h6>{props.category}</h6>
                {/* <span className='grey'>USA</span> */}
                <p className='card-title'>{props.description} </p>
            </div>
            <p><span className='fa fa-rupee'>{props.price}</span>/serve</p>
        </div>
    );
}