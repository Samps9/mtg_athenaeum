import React from 'react';

function Card(props) {
  const imageUrl = props.data.image_url;
  const modalId = "search-card-modal-" + props.data.multiverse_id;
  const modalDataTarget = "#" + modalId;

  const searchCard = (
    <div className="d-inline-flex card search-card m-2">
      <img src={imageUrl} className="img-fluid card-img-top p-2"/>
      <hr className="divider"/>
      <div  className="card-body p-2">
        <button className="btn btn-outline-dark" data-toggle="modal" data-target={modalDataTarget}>
          <i className="fa fa-bars"></i>
        </button>
        <button className="btn btn-outline-dark float-right">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );

  const cardModal = (
      <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.data.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.data.text}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-dark">Card Text</button>
              <button type="button" className="btn btn-outline-dark">Rulings</button>
              <button type="button" className="btn btn-outline-dark">Legalities</button>
              <button type="button" className="btn btn-outline-dark">Set</button>
            </div>
          </div>
        </div>
      </div>
    );


  return (
    <>
      {searchCard}
      {cardModal}
    </>
  );
}

export default Card;