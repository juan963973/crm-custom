import { Button, Card, Col, Row } from "react-bootstrap";
import AttachFilesButton from "./AttachFilesButton";
import { urlFile } from "services/attachService";
import { deleteFile } from "services/attachService";
import {getFile} from "services/attachService";

export default function AttachFiles ( { attachments, id, attachFiles, setAttachFiles }: any ) {

    return (

        <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
            <Row style={{ width: '99%' }}>
                <Card body>
                    <Row className='mt-200'>
                        <Col><h6 id='attachments'>ARCHIVOS ADJUNTOS</h6></Col>

                        <Col align="end">
                            <AttachFilesButton id={id} attachFiles={attachFiles} setAttachFiles={setAttachFiles}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            {attachFiles?.length > 0 ? (attachFiles.map((item: { url: string; id: any; }) => (
                                <Row key={attachFiles.id}>
                                    <div style={{
                                        color: 'gray',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}>
                                        <Col sm={1}> <img src="/attachments.png" width="20" height="20" /></Col>
                                        <Col sm={9}>{item.url.split("/").pop()}</Col>
                                        <Col style={{ display: "flex" }}>

                                            <Button variant="primary" className="btn btn-primary btn-sm"
                                                    onClick={ () => getFile(item.id, item.url) }>
                                                Ver
                                            </Button>

                                            <Button variant="danger" className="btn btn-primary btn-sm"
                                                onClick={() => deleteFile(item.id, attachFiles, setAttachFiles)}
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
