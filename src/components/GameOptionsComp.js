import { Row, Col, Button } from "react-bootstrap";

const GameOptionsComp = ({ disks, setDisks, reset, solve }) => {
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
      <Col>
        <span>Discos: {disks}</span>
        <Button onClick={setDisk} variant="outline-secondary">
          +
        </Button>
        <Button onClick={rmDisk} variant="outline-secondary">
          -
        </Button>
      </Col>
      <Col>
        <Button variant="outline-secondary" onClick={reset}>
          Reiniciar
        </Button>
        <Button variant="outline-secondary" onClick={solve}>
          Resolver
        </Button>
      </Col>
    </Row>
  );
};

export default GameOptionsComp;
