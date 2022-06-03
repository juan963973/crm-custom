import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import NewButtonCase from "./newButtonCase";

export default function Overview3({ dataIdCase, dataCompany, data }: any) {



    return (
        <>
            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                <Row style={{ width: '99%' }}>
                    <Card body>
                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS BÁSICOS</h6> </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>Tipo de Documento</Col>
                                <Col align="start">
                                    {data?.documentTypeName ? data.documentTypeName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Nro. de documento</Col>
                                <Col sm={4} align="start">
                                    {data?.documentNumber ? data.documentNumber : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>Nombre</Col>
                                <Col align="start">
                                    {/* {dataCompany?.nationalityName ? dataCompany.nationalityName : ' - '} */}
                                </Col>

                                <Col style={{ color: 'gray' }}>Apellidos</Col>
                                <Col sm={4} align="start">
                                    {/* {dataCompany?.ruc ? dataCompany.ruc : ' - '} */}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>Estado Civil</Col>
                                <Col align="start">
                                    {data?.civilStatusName ? data.civilStatusName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>
                                    Nacionalidad
                                </Col>
                                <Col sm={4} align="start">
                                    {data?.nationalityName ? data.nationalityName : ' - '}
                                </Col>
                            </Row>

                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>Género contacto</Col>
                                <Col align="start">
                                    {data?.genderName ? data.genderName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>
                                    Fecha de nacimiento
                                </Col>
                                <Col sm={4} align="start">
                                    {data?.dateOfBirth ? data.dateOfBirth : ' - '}
                                </Col>
                            </Row>

                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>Edad contacto</Col>
                                <Col align="start">
                                    {data?.contactAge ? data.contactAge : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>
                                    Tipo de cartera
                                </Col>
                                <Col sm={4} align="start">
                                    {data?.walletTypeName ? data.walletTypeName : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS DEL CLIENTE</h6> </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>Código cliente</Col>
                                <Col align="start">
                                    {data?.clientCode ? data.clientCode : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Estado</Col>
                                <Col sm={4} align="start">
                                    {data?.clientStatus ? data.clientStatus : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>¿Es cliente?</Col>
                                <Col align="start">
                                    {data?.isClient ? data.isClient : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>¿Es cliente salario?</Col>
                                <Col sm={4} align="start">
                                    {data?.isClientSalary ? data.isClientSalary : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>¿Es funcionario?</Col>
                                <Col align="start">
                                    {data?.isClerk ? data.isClerk : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>

                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS DEL CONTACTO</h6> </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>Correo electrónico</Col>
                                <Col align="start">
                                    {data?.email ? data.email : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Correo electrónico secundario</Col>
                                <Col sm={4} align="start">
                                    {data?.secondaryEmail ? data.secondaryEmail : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: '5px' }}>
                                <Col style={{ color: 'gray' }}>Móvil</Col>
                                <Col align="start">
                                    {data?.mobile ? data.mobile : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Teléfono fijo</Col>
                                <Col sm={4} align="start">
                                    {data?.phone ? data.phone : ' - '}
                                </Col>
                            </Row>

                        </Row>
                    </Card>
                </Row>
            </Row>

            <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
                {/*<Row style={{ width: '99%' }}>*/}
                {/*    <Card body>*/}
                {/*        <Row className='mt-200'>*/}
                {/*            <Col align="start">*/}
                {/*                <h6 id="cases">*/}
                {/*                    Casos*/}
                {/*                </h6>*/}
                {/*            </Col>*/}
                {/*            <Col align="end">*/}
                {/*                /!* <NewButtonCase dataIdCase={dataIdCase} /> *!/*/}
                {/*            </Col>*/}
                {/*        </Row>*/}
                {/*        <Row style={{*/}
                {/*            justifyContent: 'between',*/}
                {/*            alignItems: 'center'*/}
                {/*        }}>*/}
                {/*        </Row>*/}
                {/*    </Card>*/}
                {/*</Row>*/}
            </Row>
        </>
    )
}