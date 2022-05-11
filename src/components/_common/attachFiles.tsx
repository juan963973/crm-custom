import { ReactChild, ReactFragment, ReactPortal } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import AttachFilesButton from "./AttachFilesButton";
import { viewFile } from "services/attachService";
import { deleteFile } from "services/attachService";

export default function AttachFiles(props: { attachments: any[]; id: any; }) {
    let dataFile = props.attachments
    console.log('mis hijos', dataFile)
    console.log('mis hijos', typeof (dataFile))

    function viewFileTrigger(id: any){
        viewFile(id)
    }
    function deleteFileTrigger(id: any){
        deleteFile(id)
    }
    return (

        <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
            <Row style={{ width: '99%' }}>
                <Card body>
                    <Row className='mt-200'>
                        <Col><h6>ARCHIVOS ADJUNTOS</h6></Col>

                        <Col align="end">
                            <AttachFilesButton id={props.id} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            {dataFile ? (dataFile.map((item) => (
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
                                    <Col>{item.id}</Col>
                                    <Col>{item.url}</Col>
                                    <Col>
                                        <Button variant="primary" className="btn btn-primary btn-sm"
                                        onClick={viewFileTrigger(item.id)}>
                                            Ver
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button variant="danger" className="btn btn-primary btn-sm"
                                         onClick={deleteFileTrigger(item.id)}>
                                            Eliminar
                                        </Button>
                                    </Col>
                                </Row>
                            )))

                                : <Row style={{ color: 'gray' }}>Sin adjuntos</Row>

                            }

                        </Col>
                    </Row>
                </Card>
            </Row>
        </Row>
    )
}
