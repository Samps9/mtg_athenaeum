import React from 'react';

function NoResults(props) {
  return <div className="text-center mt-5">No cards found with "{`${props.emptySearchTerm}`}" in the name</div>;
}

export default NoResults;
