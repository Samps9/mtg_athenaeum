import React from 'react';
import Modal from './Modal'

function Card(props) {
  const imageUrl = props.data.image_url;
  // bootstrap needs an HTML element id to make the modal work
  const modalDataTarget = "#search-card-modal-" + props.data.multiverse_id;

  const searchCard = (
    <div className="d-inline-flex card search-card m-2">
      <img src={imageUrl} className="img-fluid card-img-top p-2"/>
      <hr className="divider"/>
      <div  className="card-body p-2">
        <button className="btn btn-outline-dark float-right mr-2" data-toggle="modal" data-target={modalDataTarget}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </div>
  );

  const cardModal = <Modal data = {props.data}  />;  

  return (
    <>
      {searchCard}
      {cardModal}
    </>
  );
}

export default Card;