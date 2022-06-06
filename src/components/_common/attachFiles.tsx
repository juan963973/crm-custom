import { ReactChild, ReactFragment, ReactPortal } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import AttachFilesButton from "./AttachFilesButton";
import { urlFile } from "services/attachService";
import { deleteFile } from "services/attachService";

export default function AttachFiles ( { attachments, id }: any ) {

    console.log('AttachFiles', id);

    return (

        <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
            <Row style={{ width: '99%' }}>
                <Card body>
                    <Row className='mt-200'>
                        <Col><h6 id='attachments'>ARCHIVOS ADJUNTOS</h6></Col>

                        <Col align="end">
                            <AttachFilesButton id={id} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            {attachments?.length > 0 ? (attachments.map((item: { url: string; id: any; }) => (
                                <Row>
                                    <div style={{
                                        color: 'gray',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}>
                                        {/* <Col sm={1}>{item.id}</Col> */}
                                        <Col sm={1}> <img src="/attachments.png" width="20" height="20" /></Col>
                                        <Col sm={9}>{item.url.split("\\").pop()}</Col>
                                        <Col style={{ display: "flex" }}>

                                            <Button variant="primary" className="btn btn-primary btn-sm"
                                                href={`${urlFile}${item.id}`}>
                                                Ver
                                            </Button>

                                            <Button variant="danger" className="btn btn-primary btn-sm"
                                                onClick={() => deleteFile(item.id)}
                                                style={{ marginLeft: '5px'}}>
                                                Eliminar
                                            </Button>
                                        </Col>
                                    </div>
                                </Row>
                            )))

                                : <Row style={{
                                    color: 'gray',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: 10,
                                    marginTop: 10,
                                    borderColor: 'rgb(237, 240, 244)',
                                    borderStyle: 'solid',
                                    borderWidth: 'thin',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                }}
                                >
                                    Sin adjuntos</Row>

                            }

                        </Col>
                    </Row>
                </Card>
            </Row>
        </Row>
    )
}
