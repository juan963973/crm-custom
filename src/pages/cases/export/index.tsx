import {
    Button,
    Col,
    Container,
    Row
} from "react-bootstrap";

import { DateRangePicker, Form, Panel } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

export default function Show() {
    const styles = {
        radioGroupLabel: {
            padding: '8px 12px',
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    };

    if (typeof window !== "undefined") {
        injectStyle();
    }

    const initFormValue = {
        dateRangePicker: [new Date(), new Date()],
    };

    const handleSubmit = () => {
        toast.success("Será enviado un email con el adjunto solicitado", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log(initFormValue)
    }

    return (
        <>

            <Container className="p-3 mb-3 bg-white rounded mt-2">
                <ToastContainer />
                <Row style={{ marginTop: '50px' }}>
                    <Col sm={5}>
                        <Row>
                            <h4>Reporte para el BCP</h4>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row style={{ backgroundColor: '#edf0f4' }}>
                    <Row style={{ width: '600px' }}>
                        <Row sm={4} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>

                            <Col sm={4} style={{ width: 'auto', paddingTop: "5px", paddingBottom: "5px" }}>

                                <Row> <h6>Fecha</h6></Row>
                                <Row>
                                    <Panel>
                                        <Form>
                                            <Form.Group controlId="dateRangePicker">
                                                <Form.ControlLabel>Seleccione un rango de fechas:</Form.ControlLabel>
                                                <Form.Control name="dateRangePicker" accepter={DateRangePicker} />
                                            </Form.Group>


                                        </Form>
                                    </Panel>
                                </Row>

                            </Col>

                        </Row>


                    </Row>
                    <Row style={{ marginTop: '25px', marginBottom: '60px' }}>
                        <Col sm={2} style={{ marginLeft: '200px', width: '600px' }}>
                            <Button onClick={handleSubmit}>Exportar</Button>
                        </Col>
                    </Row>
                </Row>
            </Container >


            <Container className="p-3 mb-3 bg-white rounded mt-2">
                <ToastContainer />
                <Row style={{ marginTop: '50px' }}>
                    <Col sm={5}>
                        <Row>
                            <h4>Tablero de casos</h4>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row style={{ backgroundColor: '#edf0f4', justifyContent: 'center' }}>
                    <Col sm={3} style={{ backgroundColor: '#edf0f4', justifyContent: 'center'  }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pwJuFbyhZFE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Col>

                </Row>
            </Container>
        </>
    );
}
