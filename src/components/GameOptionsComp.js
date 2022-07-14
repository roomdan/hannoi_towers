import { Row, Col, Button } from "react-bootstrap";

const GameOptionsComp = ({ disks, setDisks, reset, solve, moveCount }) => {
  function setDisk() {
    if (disks < 10) {
      setDisks(disks + 1);
    }
  }

  function rmDisk() {
    if (disks > 3) {
      setDisks(disks - 1);
    }
  }

  return (
    <Row>
      <Col className="p-3 d-flex justify-content-center align-items-center">
        <h3>Dificultad: </h3>
        <Button className="m-2" onClick={rmDisk} variant="success">
          -
        </Button>
        <Button className="m-2" variant="secondary">{disks}</Button>
        <Button className="m-2" onClick={setDisk} variant="success">
          +
        </Button>
      </Col>
      <Col className="p-3 d-flex justify-content-center align-items-center">
        <h3>Movimientos: {moveCount}</h3>
      </Col>
      <Col className="p-3 d-flex justify-content-center align-items-center">
        <Button className="m-1" variant="danger" onClick={reset}>
          Reiniciar
        </Button>
        <Button className="m-1" variant="warning" onClick={solve}>
          Resolver
        </Button>
      </Col>
    </Row>
  );
};

export default GameOptionsComp;
