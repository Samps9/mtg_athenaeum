import React from 'react';

function Modal(props) {
  // break card text into lines, if present

  const modalCardText = typeof props.data.text === "string" && props.data.text.length > 0 ? props.data.text.split("\n").map(
    (text, index) => (
      <p key = {index}>{text}</p>
    )
  ) : null

  const modalCardFlavor = typeof props.data.flavor === "string" && props.data.flavor.length > 0 ? props.data.flavor.split("\n").map(
    (flavor, index) => (
      <p key = {index}>{flavor}</p>
    )
  ) : null

  return (
    <>
      <div className="modal fade" id={"search-card-modal-" + props.data.multiverse_id} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.data.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Not all cards have the same properties, depending on card_type, so only render relevant data */}
              {props.data.mana_cost !== null ? <h6>Mana Cost</h6> : null}
              {props.data.mana_cost !== null ? <p>{props.data.mana_cost}</p> : null}
              <h6>Card Type</h6>
              <p>{props.data.card_type}</p>
              {modalCardText !== null ? <h6>Card Text</h6> : null}
              {modalCardText !== null ? modalCardText : null}
              {modalCardFlavor !== null ? <h6>Flavor Text</h6> : null}
              {modalCardFlavor !== null ? modalCardFlavor : null}  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;