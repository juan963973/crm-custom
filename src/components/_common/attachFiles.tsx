import { Card, Col, Row } from "react-bootstrap";
import AttachFilesButton from "./comments/AttachFilesButton";

export default function AttachFiles() {

    return (

        <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
            <Row style={{ width: '99%' }}>
                <Card body>
                    <Row className='mt-200'>
                        <Col><h6>ARCHIVOS ADJUNTOS</h6></Col>
                        <Col align="end"> <button className="comment-form-button btn btn-primary btn-sm"
                        >Adjuntar</button></Col>

                        <Col align="end">
                            <AttachFilesButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row style={{ color: 'gray' }}>Sin adjuntos</Row>
                        </Col>
                    </Row>
                </Card>
            </Row>
        </Row>
    )
}
