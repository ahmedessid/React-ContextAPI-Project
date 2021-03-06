import React from "react";
import { Modal } from "react-bootstrap";
import EditMovie from "./EditMovie";

const Movie = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h5 className="movieTitle">
        {props.name}
        <div>
          <button className="btn btn-info" onClick={showModal}>
            Edit
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => props.deleteMovie(props.id)}
          >
            Delete
          </button>
        </div>
      </h5>
      <p>${props.price}</p>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Edit Movie: {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditMovie name={props.name} price={props.price} id={props.id} />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-light" onClick={hideModal}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Movie;
