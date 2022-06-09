import { Col, Row, Button } from "react-bootstrap";

export default function HeaderForms({title, handleClose}:any) {

    return (
        <Row className="justify-content-end" style={{ paddingLeft: "20px" }} >
            <Col sm={2}>
              <h4>{title}</h4>
            </Col>
            <Col align="end">
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>{" "}
              {/* <Button variant="secondary">Guardar y nuevo</Button>{" "} */}
              <Button variant="primary" type="submit">
                Guardar
              </Button>{" "}
            </Col>
        </Row>
    )
}