import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import HistoryState from "components/_common/historyState"
import Notes from "components/_common/notes";
import AttachFiles from "components/_common/attachFiles";

export default function Overview({ id, cases, attachFiles, setAttachFiles }: any) {
    const { resolverAreas, resolvers } = cases;
    return (
        <>
            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>
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
                                    {cases?.clientDocumentTypeName ? cases.clientDocumentTypeName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Correo electronico</Col>
                                <Col sm={4} align="start">
                                    {cases?.contactEmail ? cases.contactEmail : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nro. de Documento Cliente</Col>
                                <Col align="start">
                                    {cases?.clientDocumentNumber ? cases.clientDocumentNumber : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Celular</Col>
                                <Col sm={4} align="start">
                                    {cases?.clientMobile ? cases.clientMobile : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Código Cliente</Col>
                                <Col align="start">
                                    {cases?.clientClientCode ? cases.clientClientCode : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Teléfono</Col>
                                <Col sm={4} align="start">
                                    {cases?.contactPhone ? cases.contactPhone : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Sucursal cliente</Col>
                                <Col sm={4} align="start">
                                    {cases?.clientBranchName ? cases.clientBranchName : ' - '}
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
                                    {cases?.promotorName ? cases.promotorName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Nro. de documento gestor</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorDocumentNumber ? cases.promotorDocumentNumber : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Celular gestor</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Email gestor</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
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

                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Asunto</Col>
                                <Col align="start">
                                    <Row>
                                        {cases?.subject ? cases.subject : ' - '}
                                    </Row>
                                </Col>

                                <Col style={{ color: 'gray' }}>Descripción del caso</Col>
                                <Col sm={4} align="start">
                                    {cases?.description ? cases.description : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Moneda</Col>
                                <Col align="start">
                                    {cases?.currencyName ? cases.currencyName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Monto del reclamo</Col>
                                <Col sm={4} align="start">
                                    {cases?.claimAmount ? cases.claimAmount : ' - '}
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
                                    {cases?.originName ? cases.originName : ' - '}
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
                                    {cases?.caseStatusName ? cases.caseStatusName : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Dirección de llamada</Col>
                                <Col align="start">
                                    {cases?.callDirectionName ? cases.callDirectionName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>id ServiDesk</Col>
                                <Col sm={4} align="start">
                                    {cases?.idServidesk ? cases.idServidesk : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Sucursal de recepción</Col>
                                <Col align="start">
                                    {cases?.receptionBranchName ? cases.receptionBranchName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Fecha/hora de Recepción</Col>
                                <Col sm={4} align="start">
                                    - en duro
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Sucursal Afectada (Reclamo)</Col>
                                <Col align="start">
                                    {cases?.affectedBranchName ? cases.affectedBranchName : ' - '}
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
                                <Col style={{ color: 'gray' }}>Áreas Resolutoras</Col>
                                <Col align="start">
                                    {resolverAreas?.length > 0 ? resolverAreas.map((el: any) =>{
                                        return(
                                            <Row key={el}>{el}</Row>
                                        )
                                    }) : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Oficial negocio</Col>
                                <Col sm={4} align="start">
                                    {cases?.businessOfficerUserName ? cases.businessOfficerUserName : ' - '}
                                </Col>
                            </Row>
                            <Row align="start">
                                <Col style={{ color: 'gray' }}>Personas resolutoras</Col>
                                <Col align="start">
                                    {resolvers?.length > 0 ? resolvers.map((el: any) =>{
                                        return(
                                            <Row key={el}>{el}</Row>
                                        )
                                    }) : ' - '}
                                </Col>
                                <Col style={{ color: 'gray' }}></Col>
                                <Col align="start"></Col>
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

                                <Col style={{ color: 'gray' }}>Comentario de Cierre del Caso</Col>
                                <Col sm={4} align="start">
                                    {cases?.closedComment ? cases.closedComment : ' - '}
                                </Col>
                            </Row>
                            <Row sm={4} align="end">
                                <Col style={{ color: 'gray' }}>Resolución a favor del cliente</Col>
                                <Col sm={4} align="start">
                                    {cases?.resolutionClientFavorName ? cases.resolutionClientFavorName : ' - '}
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
                                <Row> <h6 id="notes">NOTAS</h6></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Notes id={id} />
                        </Row>
                    </Card>
                </Row>
            </Row>

            <HistoryState statusHistories={cases.statusHistories} />

            <AttachFiles id={id} attachments={cases.attachments} attachFiles={attachFiles} setAttachFiles={setAttachFiles}/>

            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>
                        <Row className='mt-200'>
                            <Col>
                                <Row> <h6 id="openActivities">
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
                                <Row> <h6 id="closedActivities">

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