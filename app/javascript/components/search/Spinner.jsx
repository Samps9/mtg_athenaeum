import React from 'react';

function Spinner(props) {
  return (
    <>
      <div className="search-loading text-center mt-5">
        <i className="fa fa-spinner"></i>
        <p>Loading cards "{`${props.searchTerm}`}" in the name...</p>
      </div>
    </>
  );
}

export default Spinner;