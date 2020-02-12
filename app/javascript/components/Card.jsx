import React from 'react';

function Card(props) {
  const imageUrl = props.data.imageUrl

  return (
    <div className="card search-card" index={props.index}>
      <img src={imageUrl} className="img-fluid card-img-top"/>
    </div>
  );
}

export default Card;