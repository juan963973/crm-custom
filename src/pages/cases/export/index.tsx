import {
    Button,
    Col,
    Container,
    Row
} from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
const styles = { width: 300, display: 'block', marginBottom: 10 };


export default function Show() {


    return (
        <>

            <Container className="p-3 mb-3 bg-white rounded mt-2">
                <ToastContainer />
                <Row style={{ marginTop: '50px' }}>
                    <Col sm={5}>
                        <Row>
                            <h4>Reporte para el Banco Central del Paraguay</h4>
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
                                <Row> <DateRangePicker style={styles} id="something"/> </Row>

                            </Col>
                            
                        </Row>

                        
                    </Row>
                    <Row style={{ marginTop: '25px', marginBottom: '60px' }}>
                        <Col sm={2} style={{  marginLeft: '200px', width: '600px' }}> 
                            <Button onClick={() => (SubmitEvent('func'))}>Exportar</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>


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
                <Row style={{ backgroundColor: '#edf0f4', width: '600px', marginTop: '25px', marginBottom: '60px' }}>
                    <Col sm={3} style={{ backgroundColor: '#edf0f4'}}>
                        Some content
                    </Col>

                </Row>
            </Container>
        </>
    );
}
