import React from "react";
import { Col, Row, Card, InputGroup, FormControl, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import { detail } from "../../services/caseService";
import { CaseDetailModel } from '../../models/Case';

import Notes from "components/_common/notes";
import NewButtonCase from "./newButtonCase";

export default function Overview2({ page, id, dataIdCase }: any) {
    const [cases, setCases] = useState<CaseDetailModel>({} as CaseDetailModel)
    useEffect(() => {

        detail(page, id)

            .then(data => {

                setCases(data)

            })

            .catch(e => console.log(e));

    }, [])

    let data = cases
    // console.log(data)

    return (
        <>
            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }} className="d-flex justify-content-center">
                <Row style={{ width: '99%' }} >
                    <Card body >
                        <Row sm={3} style={{ color: 'gray', marginRight: 30 }} className='mt-200'>
                            <Col className='d-flex justify-content-end'>Empresa owner</Col>
                            <Col>{cases?.caseStatusName ? cases.caseStatusName : ' - '}</Col>
                        </Row>
                        <Row sm={3} style={{ color: 'gray', marginRight: 30 }}>
                            <Col className='d-flex justify-content-end'>Phone</Col>
                            <Col>{cases?.originName ? cases.originName : ' - '}</Col>
                        </Row>
                        <Row sm={3} style={{ color: 'gray', marginRight: 30 }}>
                            <Col className='d-flex justify-content-end'>RUC</Col>
                            <Col>{cases?.caseOwnerUserName ? cases.caseOwnerUserName : ' - '}</Col>
                        </Row>
                        <Row sm={3} style={{ color: 'gray', marginRight: 30 }}>
                            <Col className='d-flex justify-content-end'>Territories</Col>
                            <Col>{cases?.caseOwnerUserName ? cases.caseOwnerUserName : ' - '}</Col>
                        </Row>
                    </Card>
                </Row>
            </Row>

            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS BÁSICOS DE LA EMPRESA</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Empresa name</Col>
                                <Col align="start">
                                    {cases?.contactFullname ? cases.contactFullname : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Fecha Fundación</Col>
                                <Col sm={4} align="start">
                                    {cases?.companyName ? cases.companyName : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nacionalidad</Col>
                                <Col align="start">
                                    {cases?.contactFullname ? cases.contactFullname : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>RUC</Col>
                                <Col sm={4} align="start">
                                    {cases?.companyName ? cases.companyName : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Tipo Cliente</Col>
                                <Col align="start">
                                    {cases?.contactFullname ? cases.contactFullname : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DESCRIPCIÓN DE LA EMPRESA</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Empresa principal</Col>
                                <Col align="start">
                                    {cases?.clientDocumentTypeName ? cases.clientDocumentTypeName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Cantidad de funcionarios</Col>
                                <Col sm={4} align="start">
                                    {/* {cases?.contactEmail ? cases.contactEmail : ' - '} */}
                                    ***
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Actividad económica (core)</Col>
                                <Col align="start">
                                    {cases?.clientDocumentNumber ? cases.clientDocumentNumber : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Rango de facturación anual</Col>
                                <Col sm={4} align="start">
                                    {cases?.clientMobile ? cases.clientMobile : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Tipo de cartera</Col>
                                <Col align="start">
                                    {cases?.clientClientCode ? cases.clientClientCode : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Entidad financiera para pago de salarios</Col>
                                <Col sm={4} align="start">
                                    {cases?.contactPhone ? cases.contactPhone : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Entidad financiera en la que opera</Col>
                                <Col align="start">
                                    {cases?.clientClientCode ? cases.clientClientCode : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Lista de Actividad Economica</Col>
                                <Col sm={4} align="start">
                                    {cases?.contactPhone ? cases.contactPhone : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS DEL CONTACTO</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Contacto Lookup</Col>
                                <Col align="start">
                                    {cases?.promotorName ? cases.promotorName : ' - '} - (en duro)
                                </Col>

                                <Col style={{ color: 'gray' }}>Correo electrónico</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorDocumentNumber ? cases.promotorDocumentNumber : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Email empresa</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Teléfono móvil</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Teléfono</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DIRECCIÓN DE LA EMPRESA</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Dirección</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Referencia</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nro. de casa</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Departamento</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Ciudad</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Barrio</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
                                </Col>
                            </Row>
                        </Row>


                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DIRECCIÓN DE LA FACTURACIÓN</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>País de facturación</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Domicilio de facturación</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Estado de facturación</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Ciudad de facturación</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DIRECCIÓN REGISTRO</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Creado por</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Modificado por</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS ENCARGADO</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Team leader</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Gerente sucursal</Col>
                                <Col sm={4} align="start">
                                    {cases?.promotorEmail ? cases.promotorEmail : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Supervisor</Col>
                                <Col align="start">
                                    {cases?.promotorPhone ? cases.promotorPhone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>
                        </Row>


                    </Card>


                </Row>


            </Row>

            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>
                        <Row className='mt-200'>
                            <Col align="start">
                                <h6>
                                    Casos
                                </h6>
                            </Col>
                            <Col align="end">
                                <NewButtonCase dataIdCase={dataIdCase} />
                            </Col>
                        </Row>
                        <Row style={{
                            justifyContent: 'between',
                            alignItems: 'center'
                        }}>
                            <Row
                                style={{
                                    color: 'gray',
                                    marginBottom: 10,
                                    marginTop: 10,
                                    borderColor: 'rgb(237, 240, 244)',
                                    borderStyle: 'solid',
                                    borderWidth: 'thin',
                                    borderLeft: 'none',
                                    borderRight: 'none'
                                }}>
                                <Col>Nro. Ticket</Col>
                                <Col>Asunto</Col>
                                <Col>Estatus</Col>
                                <Col>Tipo</Col>
                            </Row>
                            <Row
                                style={{
                                    marginBottom: 10,
                                    marginTop: 10,
                                    borderColor: 'rgb(237, 240, 244)',
                                    borderStyle: 'solid',
                                    borderWidth: 'thin',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    borderRight: 'none'
                                }}>
                                <Col>NO DEFINIDO </Col>
                                <Col> </Col>
                                <Col>ASIGNACION</Col>
                                <Col>CONSULTA</Col>
                            </Row>
                        </Row>
                    </Card>
                </Row>
            </Row>
        </>
    )
}