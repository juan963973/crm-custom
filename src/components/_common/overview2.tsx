import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import NewButtonCase from "./newButtonCase";

export default function Overview2({ dataIdCase, dataCompany }: any) {

    const { cases, economicActivityName, operatingEntityNames, salaryPaymentEntityName } = dataCompany;

    return (
        <>
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
                                    {dataCompany?.name ? dataCompany.name : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Fecha Fundación</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.foundation ? dataCompany.foundation : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nacionalidad</Col>
                                <Col align="start">
                                    {dataCompany?.nationalityName ? dataCompany.nationalityName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>RUC</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.ruc ? dataCompany.ruc : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Tipo Cliente</Col>
                                <Col align="start">
                                    {dataCompany?.type ? dataCompany.type : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>
                                    Sitio web
                                </Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.website ? dataCompany.website : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DESCRIPCIÓN DE LA EMPRESA</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Empresa principal</Col>
                                <Col align="start">
                                    {dataCompany?.o ? dataCompany.o : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Cantidad de funcionarios</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.employersQuantity ? dataCompany.employersQuantity : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: 10, marginTop: 10 }}>
                                <Col style={{ color: 'gray' }}>Descripción</Col>
                                <Col align="start">
                                    {dataCompany?.description ? dataCompany.description : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Origen de los fondos</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.sourceFunds ? dataCompany.sourceFunds : ' - '}
                                </Col>
                            </Row>

                            <Row align="end" style={{ marginBottom: 10, marginTop: 10 }}>
                                <Col style={{ color: 'gray' }}>Actividad económica (core)</Col>
                                <Col align="start">
                                    {economicActivityName?.length > 0 ? economicActivityName.map((el: any) => {
                                        return (
                                            <p key={el}>{el}</p>
                                        )
                                    }) : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Rango de facturación anual</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.billingRangeName ? dataCompany.billingRangeName : ' - '}
                                </Col>
                            </Row>

                            <Row align="end" style={{ marginBottom: 10, marginTop: 10 }}>
                                <Col style={{ color: 'gray' }}>Tipo de cartera</Col>
                                <Col align="start">
                                    {dataCompany?.walletTypeName ? dataCompany.walletTypeName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Entidad financiera para pago de salarios</Col>
                                <Col sm={4} align="start">
                                    {salaryPaymentEntityName?.length > 0 ? salaryPaymentEntityName.map((el: any) => {
                                        return (
                                            <p key={el}>{el}</p>
                                        )
                                    }) : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: 10, marginTop: 10 }}>
                                <Col style={{ color: 'gray' }}>Entidad financiera en la que opera</Col>
                                <Col align="start">
                                    {operatingEntityNames?.length > 0 ? operatingEntityNames.map((el: any) => {
                                        return (
                                            <p key={el}>{el}</p>
                                        )
                                    }) : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Lista de Actividad Economica</Col>
                                <Col sm={4} align="start">
                                    {economicActivityName?.length > 0 ? economicActivityName.map((el: any) => {
                                        return (
                                            <p key={el}>{el}</p>
                                        )
                                    }) : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        {/* <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS DEL CONTACTO</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Contacto Lookup</Col>
                                <Col align="start">
                                    {dataCompany?.promotorName ? dataCompany.promotorName : ' No se '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Correo electrónico</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.promotorDocumentNumber ? dataCompany.promotorDocumentNumber : ' No se '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Email empresa</Col>
                                <Col align="start">
                                    {dataCompany?.promotorPhone ? dataCompany.promotorPhone : ' No se '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Teléfono móvil</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.promotorEmail ? dataCompany.promotorEmail : ' No se '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Teléfono</Col>
                                <Col align="start">
                                    {dataCompany?.phone ? dataCompany.phone : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>
                        </Row> */}

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DIRECCIÓN DE LA EMPRESA</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Dirección</Col>
                                <Col align="start">
                                    {dataCompany?.address ? dataCompany.address : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Referencia</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.reference ? dataCompany.reference : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Nro. de casa</Col>
                                <Col align="start">
                                    {dataCompany?.homeNumber ? dataCompany.homeNumber : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Departamento</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.departament ? dataCompany.departament : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Ciudad</Col>
                                <Col align="start">
                                    {dataCompany?.city ? dataCompany.city : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Barrio</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.neighborhood ? dataCompany.neighborhood : ' - '}
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
                                    {dataCompany?.billingCountry ? dataCompany.billingCountry : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Domicilio de facturación</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.billingStreet ? dataCompany.billingStreet : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Estado de facturación</Col>
                                <Col align="start">
                                    {dataCompany?.billingState ? dataCompany.billingState : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Ciudad de facturación</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.billingCity ? dataCompany.billingCity : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS CLIENTE</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Código cliente</Col>
                                <Col align="start">
                                    {dataCompany?.clientCode ? dataCompany.clientCode : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Estado cliente</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.clientState ? dataCompany.clientState : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Banca</Col>
                                <Col align="start">
                                    {dataCompany?.bancaName ? dataCompany.bancaName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>¿Es cliente?</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.isClient ? dataCompany.isClient : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>DATOS REGISTRO</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Creado por</Col>
                                <Col align="start">
                                    {dataCompany?.userWhoCreatedName ? dataCompany.userWhoCreatedName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Modificado por</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.userWhoModifiedName ? dataCompany.userWhoModifiedName : ' - '}
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
                                    {dataCompany?.teamLeaderUserName ? dataCompany.teamLeaderUserName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Gerente sucursal</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.branchManagerUserName ? dataCompany.branchManagerUserName : ' - '}
                                </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Supervisor</Col>
                                <Col align="start">
                                    {dataCompany?.supervisorUserName ? dataCompany.supervisorUserName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{ marginBottom: 20, marginTop: 20 }}>
                            <Row>
                                <Col> <h6>ATENCIÓN</h6> </Col>
                            </Row>
                            <Row align="end">
                                <Col style={{ color: 'gray' }}>Sucursal</Col>
                                <Col align="start">
                                    {dataCompany?.branchName ? dataCompany.branchName : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Oficial</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.officialName ? dataCompany.officialName : ' - '}
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
                            <Col align="start">
                                <h6 id="cases">
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
                            {cases?.length > 0 ? (<Row
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
                                <Col>Asunto</Col>
                                <Col>Estado</Col>
                                <Col>Tipo</Col>
                                <Col>Nombre y Apellido</Col>
                            </Row>) : null}
                            {cases?.length > 0 ? cases.map((item: any) => {
                                return (
                                        <Row style={{
                                            marginBottom: 10,
                                            marginTop: 10,
                                            borderColor: 'rgb(237, 240, 244)',
                                            borderStyle: 'solid',
                                            borderWidth: 'thin',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: 'none'
                                        }}
                                            key={item.id}>
                                            <Col>{item?.issue ? item.issue : 'Sin asunto'}</Col>
                                            <Col>{item?.caseStatusName ? item.caseStatusName : 'Sin estado'}</Col>
                                            <Col>{item?.CONSULTA ? item.CONSULTA : 'Sin datos de la consulta'}</Col>
                                            <Col>{item?.contactFullName ? item.contactFullName : 'Sin datos del Contacto'}</Col>
                                        </Row>
                                )

                            }) : <Row>
                                <Col style={{ display: 'flex',
                                justifyContent: 'center',
                                marginBottom: 10,
                                marginTop: 10,
                                borderColor: 'rgb(237, 240, 244)',
                                borderStyle: 'solid',
                                borderWidth: 'thin',
                                borderLeft: 'none',
                                borderRight: 'none', }}>Sin datos</Col>
                            </Row>}
                        </Row>
                    </Card>
                </Row>
            </Row>
        </>
    )
}