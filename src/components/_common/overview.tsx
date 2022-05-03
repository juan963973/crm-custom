import React from "react";
import { Col, Row, Card, InputGroup, FormControl } from "react-bootstrap";
import { useEffect, useState } from "react";

import { detail } from "../../services/caseService";
import { CaseDetailModel } from '../../models/Case';

import Notes from "components/_common/notes";

export default function Overview({ page, id }: any) {
    const [cases, setCases] = useState<CaseDetailModel>({} as CaseDetailModel)

    useEffect(() => {

        detail(page, id)

            .then(data => {

                setCases(data)

            })

            .catch(e => console.log(e));

    }, [])

    let data = cases
    console.log(cases)
    return (
        <>
            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }} className="d-flex justify-content-center">
                <Row style={{ width: '99%' }} >
                    <Card body >
                        <Row className='mt-200'>
                            <Col sm={3} style={{ color: 'gray', marginRight: 30 }} >
                                <Row className='d-flex justify-content-end'>Estado</Row>
                                <Row className='d-flex justify-content-end'>Origen del caso</Row>
                                <Row className='d-flex justify-content-end'>Propietario del caso</Row>
                            </Col>
                            <Col>
                                <Row>{cases?.caseStatusName ? cases.caseStatusName : ' - '}</Row>
                                <Row>{cases?.originName ? cases.originName : ' - '}</Row>
                                <Row>{cases?.caseOwnerUserName ? cases.caseOwnerUserName : ' - '}</Row>
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
                                <Row> <h6>CONTACTO</h6></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <Row><img src="/userIcon.png" width="30" /></Row>
                            </Col>
                            <Col>
                                {/* <Row>{cases[0].contactName ? cases[0].contactName: ' - ' }</Row> */}
                                <Row>ademirdemaria@hotmail.com</Row>
                                {/* <Row>{cases[0].contactPhone ? cases[0].contactPhone: ' - ' }</Row> */}
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Row>

            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>
                        {/* <Row className='mt-200' style={{ marginBottom: 35 }}>
                            <Col>
                                <Row> <h6>Esconder detalles</h6></Row>
                            </Col>
                        </Row> */}
                        {/* <Row style={{ marginTop: 30 }}>
                            <Row>
                                <Col> <h6>NRO. DE TICKET - CRONÓMETRO</h6> </Col>
                            </Row>
                            <Row>
                                <Col style={{ color: 'gray' }}>Nro_Ticket_Finansys</Col>
                                <Col>{cases?.ticketNumber ? cases.ticketNumber : ' - '}</Col>
                                <Col style={{ color: 'gray' }}> Tiempo (auto) </Col>
                                <Col>{cases?.time ? cases.time : ' - '}</Col>
                            </Row>
                        </Row> */}

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>CLIENTE</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nombre y Apellido</Col>
                                <Col align="start">
                                    {cases?.contactFullname ? cases.contactFullname : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Empresa name</Col>
                                <Col sm={4} align="start">
                                    {cases?.companyName ? cases.companyName : ' - '}
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
                                    {cases?.contactDocumentTypeName ? cases.contactDocumentTypeName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Correo electronico</Col>
                                <Col sm={4} align="start">
                                    example@example.com
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nro. de Documento Cliente</Col>
                                <Col align="start">
                                    {cases?.contactDocumentNumber ? cases.contactDocumentNumber : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Celular</Col>
                                <Col sm={4} align="start">
                                    {cases?.contactMobile ? cases.contactMobile : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Código Cliente</Col>
                                <Col align="start">
                                    {cases?.contactClientCode ? cases.contactClientCode : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Teléfono</Col>
                                <Col sm={4} align="start">
                                    {cases?.contactPhone ? cases.contactPhone : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Sucursal cliente</Col>
                                <Col sm={4} align="start">
                                    {cases?.contactBranchName ? cases.contactBranchName : ' - '}
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
                                    {cases?.promoterFullName ? cases.promoterFullName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Nro. de documento gestor</Col>
                                <Col sm={4} align="start">
                                    {cases?.promoterDocumentNumber ? cases.promoterDocumentNumber : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Celular gestor</Col>
                                <Col align="start">
                                    {cases?.promoterPhone ? cases.promoterPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Email gestor</Col>
                                <Col sm={4} align="start">
                                    {cases?.promoterEmail ? cases.promoterEmail : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>CLASIFICACIÓN DEL CASO</h6> </Col>
                            </Row>
                            <Row className='mt-200'>
                                <Col sm={3} style={{ color: 'gray', marginRight: 30 }} >
                                    <Row className='d-flex justify-content-end'>Tipo</Row>
                                    <Row className='d-flex justify-content-end'>Subtipo</Row>
                                    <Row className='d-flex justify-content-end'>Tipificacion</Row>
                                </Col>
                                <Col>
                                    <Row>{cases?.typeName ? cases.typeName : ' - '}</Row>
                                    <Row>{cases?.subtypeName ? cases.subtypeName : ' - '}</Row>
                                    <Row>{cases?.typificationName ? cases.typificationName : ' - '}</Row>
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>EXPLICACIÓN DEL CASO</h6> </Col>
                            </Row>
                            <Row className='mt-200'>
                                <Col sm={3} style={{ color: 'gray', marginRight: 30 }} >
                                    <Row className='d-flex justify-content-end'>Asunto</Row>
                                    <Row className='d-flex justify-content-end'>Descripción del Caso</Row>
                                </Col>
                                <Col>
                                    <Row>CONSULTA</Row>
                                    <Row>{cases?.description ? cases.description : ' - '}</Row>
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS DEL CASO</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Origen del caso</Col>
                                <Col align="start">
                                    CALL {cases?.originName ? cases.originName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Nro. ticket</Col>
                                <Col sm={4} align="start">
                                    {cases?.ticketNumber ? cases.ticketNumber : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Fecha/Hora Creado</Col>
                                <Col align="start">
                                    {cases?.createdAt ? cases.createdAt : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Estado</Col>
                                <Col sm={4} align="start">
                                    PENDIENTE
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Dirección de llamada</Col>
                                <Col align="start">
                                    {cases?.callDirection ? cases.callDirection : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>d ServiDesk</Col>
                                <Col sm={4} align="start">
                                    {cases?.idServidesk ? cases.idServidesk : ' - '}
                                </Col>
                            </Row>

                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>RESOLUTORES DEL CASO</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Áreas Resolutoras</Col>
                                <Col align="start">
                                    {cases?.resolverAreas ? cases.resolverAreas : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Oficial negocio</Col>
                                <Col sm={4} align="start">
                                    {cases?.businessOfficerName ? cases.businessOfficerName : ' - '}
                                </Col>
                            </Row>
                            <Row align="start">
                                <Col style={{ color: 'gray' }}>Personas Resolutoras</Col>
                                <Col align="start">
                                    {cases?.resolvers ? cases.resolvers : ' - '}
                                </Col>
                            </Row>

                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>RESOLUCIÓN / COMENTARIO</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Solución</Col>
                                <Col align="start">
                                    {cases?.solution ? cases.solution : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Comentario de Contacto / Cierre</Col>
                                <Col sm={4} align="start">
                                    -
                                </Col>
                            </Row>
                            <Row sm={4} align="end">
                                <Col style={{ color: 'gray' }}>Resolución a favor del cliente</Col>
                                <Col sm={4} align="start">
                                    -
                                </Col>
                                {/* <Col style={{ color: 'gray' }}>¿Desea solicitar una prórroga del caso?</Col>
                                <Col align="start">
                                    {cases?.requestExtension ? cases.requestExtension : ' - '}
                                </Col> */}
                            </Row>

                        </Row>

                        {/* <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>COMENTARIOS</h6> </Col>
                            </Row>
                            <Row align="start">
                                <Col style={{ color: 'gray' }}>Comentarios</Col>
                                <Col align="start">
                                    -
                                </Col>
                            </Row>

                        </Row> */}

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS ADICIONALES</h6> </Col>
                            </Row>
                            <Row align="end" sm={4}>
                                <Col style={{ color: 'gray' }}>Agregar comentarios</Col>
                                <Col align="start">
                                    -
                                </Col>

                                {/* <Col style={{ color: 'gray' }}>Nro. de comentarios</Col>
                                <Col sm={4} align="start">
                                    -
                                </Col> */}
                            </Row>

                        </Row>

                        {/* <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>USO INTERNO - AUTOMATIZACIÓN</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Notas_auto</Col>
                                <Col align="start">
                                    -
                                </Col>

                                <Col style={{ color: 'gray' }}>Fecha/Hora Cierre</Col>
                                <Col sm={4} align="start">
                                    -
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nro Ticket (auto)</Col>
                                <Col align="start">
                                    123456
                                </Col>

                                <Col style={{ color: 'gray' }}>Actualizado</Col>
                                <Col sm={4} align="start">
                                    -
                                </Col>
                            </Row>

                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>AUTOMATIZACIÓN - FORM</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nombre/Empresa (auto)</Col>
                                <Col align="start">
                                    -
                                </Col>

                                <Col style={{ color: 'gray' }}>RUC (auto)</Col>
                                <Col sm={4} align="start">
                                    -
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nombre (auto)</Col>
                                <Col align="start">
                                    -
                                </Col>

                                <Col style={{ color: 'gray' }}>Apellido (auto)</Col>
                                <Col sm={4} align="start">
                                    -
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Teléfono Gestor (auto)</Col>
                                <Col align="start">
                                    -
                                </Col>

                                <Col style={{ color: 'gray' }}>Email (auto)</Col>
                                <Col sm={4} align="start">
                                    -
                                </Col>
                            </Row>
                        </Row> */}





                    </Card>


                </Row>


            </Row>

            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>
                        <Row className='mt-200'>
                            <Col>
                                <Row> <h6>NOTAS</h6></Row>
                            </Col>
                        </Row>
                        <Row>
                            {/* <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                    placeholder="Add a note..."
                                />
                            </InputGroup> */}
                            <Notes />
                        </Row>
                    </Card>
                </Row>
            </Row>

            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>
                        <Row className='mt-200'>
                            <Col>
                                <Row> <h6>HISTORIAL DEL ESTADO</h6></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row style={{ color: 'gray' }}>Estado</Row>
                                <Row>Cerrado</Row>
                            </Col>
                            <Col>
                                <Row style={{ color: 'gray' }}>Duración (días)</Row>
                                <Row>0 días</Row>
                            </Col>
                            <Col>
                                <Row style={{ color: 'gray' }}>Tiempo modificación</Row>
                                <Row>Mar 7, 2022 05:41 AM</Row>
                            </Col>
                            <Col>
                                <Row style={{ color: 'gray' }}>	Modificado por</Row>
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
                                <Row > <h6>ADJUNTOS</h6></Row>
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

            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>
                        <Row className='mt-200'>
                            <Col>
                                <Row> <h6>
                                    ACTIVIDADES ABIERTAS</h6></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row style={{ color: 'gray' }}>No se hallaron registros</Row>
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

                                    ACTIVIDADES CERRADAS</h6></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row style={{ color: 'gray' }}>No se hallaron registros</Row>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Row>

        </>
    )
}