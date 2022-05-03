import { Card, Col, Row } from "react-bootstrap"

export default function HistoryState() {
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
            <Row style={{ width: '99%' }}>
                <Card body>
                    <Row className='mt-200'>
                        <Col>
                            <Row> <h6>HISTORIAL DEL ESTADO</h6></Row>
                        </Col>
                    </Row>
                    <Row>
                        <Row style={{
                            color: 'gray',
                            marginBottom: 10,
                            marginTop: 10,
                            borderColor: 'rgb(237, 240, 244)',
                            borderStyle: 'solid',
                            borderWidth: 'thin',
                            borderLeft: 'none',
                            borderRight: 'none'
                        }}>
                            <Col>Estado</Col>
                            <Col>Duración (días)</Col>
                            <Col>Tiempo modificación</Col>
                            <Col>Modificado por</Col>
                        </Row>
                        <Row style={{
                            marginBottom: 10,
                            marginTop: 10,
                            borderColor: 'rgb(237, 240, 244)',
                            borderStyle: 'solid',
                            borderWidth: 'thin',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderTop: 'none'
                        }}>
                            <Col>Cerrado</Col>
                            <Col>0 días</Col>
                            <Col>Mar 7, 2022 05:41 AM</Col>
                            <Col>Matias Samuel Yorki Samudio</Col>
                        </Row>
                    </Row>
                </Card>
            </Row>
        </Row>
    )
}            