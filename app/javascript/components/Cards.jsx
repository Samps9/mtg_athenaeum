import React, {useState, useEffect} from 'react';

function Cards(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/api/v1/cards/search/').then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error ("Cannot fetch cards at given url :(");
    })
    .then(response => setCards(response))
    .catch(() => {props.push.history("/")});
  })
  
  const toRender = cards.map(
    (card, index) => (
      <div className="col-md-6 col-lg-4">
        <img src={cards.length > 0 ? card['imageUrl'] : ""} />
      </div>
    )
  );

  return (
    <div>
      {cards.length > 0 ? toRender : "Loading..."}
    </div>
  );
}

export default Cards;