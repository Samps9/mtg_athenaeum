import React, { useState, useEffect } from 'react';

function Decks(props) {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch('/api/v1/decks/index').then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("Bad response :(");
    })
    .then(response => setDecks(response))
    .catch(() => props.history.push("/"));
  })

  const toRender = (
    <img src={decks.length > 0 ? decks[0]['image_url'] : ""} />
  );
  
  return (
    <div className="col-md-6 col-lg-4">
      {decks.length > 0 ? toRender : "Loading..."}
    </div>
  );
}

export default Decks;