import React from 'react';
import {Link} from 'react-router-dom';

function Greeting() {
  const suggestedTerms = [
    "elf", "troll", "goblin", "beast", "dragon", "wolf", "giant", "ice", "flame", "light", "dark", "justice",
    "prison", "decree", "fleet", "cyclops", "mage", "angel", "vampire", "future", "past", "time", "memory", "forgotten",
    "agent", "brain", "blood", "heart", "bone", "rats", "storm", "blade", "sword", "dagger", "axe", "bow", "sling",
    "trap", "zombie", "skeleton", "reaper", "demon", "devil", "god", "demise", "sanctuary", "ghost", "phantom",
    "mountain", "plains", "island", "forest", "swamp"
  ];

  const toRender = suggestedTerms.map(
    (term, index) => (
      <code className="suggested-search-term" key={index}>{term}</code>
    )
  )

  return (
    <>
      <div className="text-center mt-5 greeting">
        <p className="no-margin">Welcome to the MTG Athenaeum!</p>
        <p className="subscript">
          This site pertains to  
          <Link to={{pathname: "https://www.magic.wizards.com/en"}} target="_blank"> Magic The Gathering</Link>.
        </p>
        <p>Whether you are new to Magic or a veteran player, you might try search terms like the following:</p>
        <div className="suggested-search-terms">    
          {toRender}
        </div>
      </div>
    </>
  );
}

export default Greeting;