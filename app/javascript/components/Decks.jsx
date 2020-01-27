import React, { useState, useEffect } from 'react';

function Decks(props) {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch('/api/v1/decks/index')
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error("Bad response :(");
      })
      .then(response => setDecks(response))
      .catch(() => props.history.push("/"));
  })
  
  return (
    <div className="col-md-6 col-lg-4">
      <img src={decks.length > 0 ? decks[0]['imageUrl'] : "Loading..."} />
    </div>
  );
}

export default Decks;