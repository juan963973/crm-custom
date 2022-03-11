import { Button, Col, Container, Form, Row, Card, InputGroup, FormControl, ButtonGroup, ToggleButton } from "react-bootstrap";
import Select from 'react-select';
import { useEffect, useState } from "react";

import { listCases } from "../../../services/caseService";
import { CaseDetailModel } from ".../../models/Case";
import Index from "..";

const personOptions = [
    { value: 'Jessi', label: 'Jessi' },
    { value: 'Anto', label: 'Anto' },
    { value: 'Marcos', label: 'Marcos' },
    { value: 'New Persona', label: 'New Persona' }
]

const EnterpriseOptions = [
    { value: 'Patria', label: 'Patria' },
    { value: 'Avalon', label: 'Avalon' },
    { value: 'Bepsa', label: 'Bepsa' },
    { value: 'New enterprise', label: 'New enterprise' }
]

const idOptions = [
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Cédula', label: 'Cédula' },
    { value: 'RUC', label: 'RUC' },
    { value: 'Pasaporte', label: 'Pasaporte' }
]

const caseType = [
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Consulta', label: 'Consulta' },
    { value: 'Solicitud', label: 'Solicitud' },
    { value: 'Reclamo', label: 'Reclamo' }
]

const caseOrigin = [
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Consulta', label: 'Consulta' },
    { value: 'Solicitud', label: 'Solicitud' },
    { value: 'Reclamo', label: 'Reclamo' }
]

const caseStatus = [
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Consulta', label: 'Consulta' },
    { value: 'Solicitud', label: 'Solicitud' },
    { value: 'Reclamo', label: 'Reclamo' }
]





export default function Id() {
    const [cases, setCases] = useState<CaseDetailModel[]>([] as CaseDetailModel[])



    useEffect(() => {
 
        listCases()

            .then(data => {

                setCases(data)

            })

            .catch(e => console.log(e));

    }, [])

    let data = cases

    return (
        <>

            <Container className="shadow-sm p-3 mb-5 bg-white rounded mt-2">
                <Row >
                    <Col sm={2}  >
                        <h4>
                            ←
                        </h4>
                    </Col>
                    <Col sm={5} style={{ marginLeft: '-13%' }}>
                        <Row>
                            <h4>HABILITACIÓN DE SOBREGIRO</h4>
                        </Row>
                        <Row>
                            <h6>Descripción</h6>
                        </Row>
                    </Col>
                    <Col align="end">
                        <Button variant="secondary">Edit</Button>{' '}
                        <Button variant="secondary">...</Button>{' '}
                        «
                        »
                    </Col>
                </Row>
            </Container>

            <Container style={{ display: 'block' }}>
                <Row>
                    <Col sm={2}>
                        <b>Related List</b>
                        <p>Notes</p>
                        <p>Historial de Estado</p>
                        <p>Attachments</p>
                        <p>Open activities</p>
                        <p>Close activities</p>
                        <p>Links</p>
                        <p className="text-primary">Add link</p>
                    </Col>

                    <Col style={{
                        backgroundColor: '#edf0f4', maxHeight: "25rem", overflow: "auto"
                    }}>
                        <Row>
                            <Row sm={8}>
                                <Col>
                                    <ButtonGroup size="sm">
                                        <Button>Overview</Button>
                                        <Button variant="secondary">Timeline</Button>
                                    </ButtonGroup>

                                </Col>
                                <Col align="end">Last Update : 11:28 AM</Col>
                            </Row>

                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }} className="d-flex justify-content-center">
                                <Row style={{ width: '99%' }} >
                                    <Card body >
                                        <Row className='mt-200'>
                                            <Col sm={3} style={{ color: 'gray', marginRight: 30 }} >
                                                <Row className='d-flex justify-content-end'>Status</Row>
                                                <Row className='d-flex justify-content-end'>Case Origin</Row>
                                                <Row className='d-flex justify-content-end'>Case Owner</Row>
                                            </Col>
                                            <Col>
                                                <Row>{data.caseSatus}</Row>
                                                <Row>{data.caseOrigin}</Row>
                                                <Row>Jonathan Noguera Garcia</Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            </Row>

                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                                <Row style={{ width: '99%' }}>
                                    <Card body>
                                        <Row className='mt-200'>
                                            <Col>
                                                <Row> <h6>Contact Person</h6></Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={1}>
                                                <Row>Img</Row>
                                            </Col>
                                            <Col>
                                                <Row>ADEMIR SANTOS DE MARÍA</Row>
                                                <Row>ademirdemaria@hotmail.com</Row>
                                                <Row>(098) 190-5855</Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            </Row>

                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                                <Row style={{ width: '99%' }}>
                                    <Card body>
                                        <Row className='mt-200' style={{ marginBottom: 35 }}>
                                            <Col>
                                                <Row> <h6>Hide details</h6></Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Row>
                                                <Col> <h6>Nro. de Ticket - Cronómetro</h6> </Col>
                                            </Row>
                                            <Row>
                                                <Col style={{ color: 'gray' }}>Nro_Ticket_Finansys</Col>
                                                <Col> - </Col>
                                                <Col style={{ color: 'gray' }}> Tiempo (auto) </Col>
                                                <Col> - </Col>
                                            </Row>
                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>CLIENTE</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Nombre y Apellido</Col>
                                                <Col align="start">
                                                    Ricardo Yorki
                                                </Col>

                                                <Col style={{ color: 'gray' }}>Empresa name</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>DATOS DEL CLIENTE</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Tipo de Documento</Col>
                                                <Col align="start">
                                                    Cédula
                                                </Col>

                                                <Col style={{ color: 'gray' }}>Correo electronico</Col>
                                                <Col sm={4} align="start">
                                                    example@example.com
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Nro. de Documento Cliente</Col>
                                                <Col align="start">
                                                    0000000000
                                                </Col>

                                                <Col style={{ color: 'gray' }}>Celular</Col>
                                                <Col sm={4} align="start">
                                                    0955 222 333
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Código Cliente</Col>
                                                <Col align="start">
                                                    000000
                                                </Col>

                                                <Col style={{ color: 'gray' }}>Phone</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Sucursal cliente</Col>
                                                <Col sm={4} align="start">
                                                    Eusebio Ayala
                                                </Col>
                                                <Col ></Col>
                                                <Col ></Col>
                                            </Row>
                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>DATOS DEL CONTACTO</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Nombre y apellido gestor</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col style={{ color: 'gray' }}>Nro. de documento gestor</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Celular gestor</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col style={{ color: 'gray' }}>Email gestor</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>CLASIFICACIÓN DEL CASO</h6> </Col>
                                            </Row>
                                            <Row className='mt-200'>
                                                <Col sm={3} style={{ color: 'gray', marginRight: 30 }} >
                                                    <Row className='d-flex justify-content-end'>Type</Row>
                                                    <Row className='d-flex justify-content-end'>Subtipo</Row>
                                                    <Row className='d-flex justify-content-end'>Tipificacion</Row>
                                                </Col>
                                                <Col>
                                                    <Row>CONSULTA</Row>
                                                    <Row>Cuenta Corriente</Row>
                                                    <Row>Comision / gastos / penalidad / intereses / impuestos / seguro</Row>
                                                </Col>
                                            </Row>
                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>CLASIFICACIÓN DEL CASO</h6> </Col>
                                            </Row>
                                            <Row className='mt-200'>
                                                <Col sm={3} style={{ color: 'gray', marginRight: 30 }} >
                                                    <Row className='d-flex justify-content-end'>Subject</Row>
                                                    <Row className='d-flex justify-content-end'>Descripción del Caso</Row>
                                                </Col>
                                                <Col>
                                                    <Row>CONSULTA</Row>
                                                    <Row>Cuenta Corriente</Row>
                                                    <Row>Contacto el cliente de referencia, el mismo solicita contactar con su oficial de cuentas, menciona es referente a la habilitación para operar con cuentas corrientes, menciona que hace 7 años aproximadamente fue inhabilitado para uso de cta cte y hace aproximadamente 15 días se acerco a la sucursal ... Show more</Row>
                                                </Col>
                                            </Row>
                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>DATOS DEL CONTACTO</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Case Origin</Col>
                                                <Col align="start">
                                                    CALL CENTER
                                                </Col>

                                                <Col style={{ color: 'gray' }}>Case owner</Col>
                                                <Col sm={4} align="start">
                                                    Unkwnown
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Nro. ticket</Col>
                                                <Col align="start">
                                                    123456
                                                </Col>

                                                <Col style={{ color: 'gray' }}>Fecha/Hora Creado</Col>
                                                <Col sm={4} align="start">
                                                    Mar 4, 2022 08:51 AM
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Status</Col>
                                                <Col align="start">
                                                    PENDIENTE
                                                </Col>

                                                <Col style={{ color: 'gray' }}></Col>
                                                <Col sm={4} align="start">
                                                    Mar 4, 2022 08:51 AM
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>Dirección de llamada</Col>
                                                <Col align="start">
                                                    Entrante
                                                </Col>

                                                <Col style={{ color: 'gray' }}></Col>
                                                <Col sm={4} align="start">
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col style={{ color: 'gray' }}>id ServiDesk</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col style={{ color: 'gray' }}></Col>
                                                <Col sm={4} align="start">
                                                </Col>
                                            </Row>
                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>RESOLUTORES DEL CASO</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >Áreas Resolutoras</Col>
                                                <Col align="start">
                                                    Sucursal Eusebio Ayala (16)
                                                </Col>

                                                <Col>Oficial negocio</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                            <Row align="start">
                                                <Col >Personas Resolutoras</Col>
                                                <Col align="start">
                                                    Jonnatan Miranda
                                                </Col>
                                            </Row>

                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>RESOLUCIÓN / COMENTARIO</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >Solution</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col>Comentario de Contacto / Cierre</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >¿Desea solicitar una prórroga del caso?</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col>Calificación</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>

                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>COMENTARIOS</h6> </Col>
                                            </Row>
                                            <Row align="start">
                                                <Col >Comments</Col>
                                                <Col align="start">
                                                    -
                                                </Col>
                                            </Row>

                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>DATOS ADICIONALES</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >Add comment</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col>No. of comments</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>

                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>USO INTERNO - AUTOMATIZACIÓN</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >Notas_auto</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col>Fecha/Hora Cierre</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >Nro Ticket (auto)</Col>
                                                <Col align="start">
                                                    123456
                                                </Col>

                                                <Col>Actualizado</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>

                                        </Row>

                                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                                            <Row>
                                                <Col> <h6>AUTOMATIZACION - FORM</h6> </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >Nombre/Empresa (auto)</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col>RUC (auto)</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >Nombre (auto)</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col>Apellido (auto)</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                            <Row align="end">
                                                <Col >Teléfono Gestor (auto)</Col>
                                                <Col align="start">
                                                    -
                                                </Col>

                                                <Col>Email (auto)</Col>
                                                <Col sm={4} align="start">
                                                    -
                                                </Col>
                                            </Row>
                                        </Row>





                                    </Card>


                                </Row>


                            </Row>

                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                                <Row style={{ width: '99%' }}>
                                    <Card body>
                                        <Row className='mt-200'>
                                            <Col>
                                                <Row> <h6>Notes</h6></Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    aria-label="Example text with button addon"
                                                    aria-describedby="basic-addon1"
                                                    placeholder="Add a note..."
                                                />
                                            </InputGroup>
                                        </Row>
                                    </Card>
                                </Row>
                            </Row>

                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                                <Row style={{ width: '99%' }}>
                                    <Card body>
                                        <Row className='mt-200'>
                                            <Col>
                                                <Row> <h6>Historial de Estado</h6></Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row style={{ color: 'gray' }}>Status</Row>
                                                <Row>Cerrado</Row>
                                            </Col>
                                            <Col>
                                                <Row style={{ color: 'gray' }}>Duration (Days)</Row>
                                                <Row>0 days</Row>
                                            </Col>
                                            <Col>
                                                <Row style={{ color: 'gray' }}>Modified Time</Row>
                                                <Row>Mar 7, 2022 05:41 AM</Row>
                                            </Col>
                                            <Col>
                                                <Row style={{ color: 'gray' }}>	Modified By</Row>
                                                <Row>	Matias Samuel Yorki Samudio</Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            </Row>

                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                                <Row style={{ width: '99%' }}>
                                    <Card body>
                                        <Row className='mt-200'>
                                            <Col>
                                                <Row > <h6>Attachments</h6></Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row style={{ color: 'gray' }}>No Attachment</Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            </Row>

                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                                <Row style={{ width: '99%' }}>
                                    <Card body>
                                        <Row className='mt-200'>
                                            <Col>
                                                <Row> <h6>
                                                    Open Activities</h6></Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row style={{ color: 'gray' }}>No records found</Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            </Row>

                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                                <Row style={{ width: '99%' }}>
                                    <Card body>
                                        <Row className='mt-200'>
                                            <Col>
                                                <Row> <h6>

                                                    Closed Activities</h6></Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row style={{ color: 'gray' }}>No records found</Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            </Row>

                        </Row>

                    </Col>
                </Row>
            </Container>


        </>
    )
}
