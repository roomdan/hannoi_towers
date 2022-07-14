import { Button, Modal } from "react-bootstrap";
import ConfettyParticles from "./confettiParticles";

const WinMessageComp = ({ disks, moveCount, show }) => {
  return (
    <>
      {show && <ConfettyParticles />}

      <Modal
        show={show}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            className="text-black text-center"
            id="contained-modal-title-vcenter"
          >
            Felicitaciones
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black d-flex justify-content-center align-items-center flex-column">
          <h4>😍 Haz Ganado 😍</h4>
          <p>
            Resolviste el juego de {disks} discos en solo {moveCount}{" "}
            movimientos.
          </p>
          <div className="w-100">
            <Button
              className="col-12"
              onClick={() => {
                window.location.reload();
              }}
              variant="success"
            >
              Volver a Jugar
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default WinMessageComp;
