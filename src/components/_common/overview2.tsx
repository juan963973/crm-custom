import React from "react";
import { Col, Row, Card, InputGroup, FormControl, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import { detail } from "../../services/caseService";
import { CaseDetailModel } from '../../models/Case';

import Notes from "components/_common/notes";
import NewButtonCase from "./newButtonCase";

export default function Overview2({ page, id, dataIdCase, dataCompany }: any) {
    console.log('info de empresa', dataCompany)

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
                                    {dataCompany?.o ? dataCompany.o : ' No hay '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Cantidad de funcionarios</Col>
                                <Col sm={4} align="start">
                                    {dataCompany?.employersQuantity ? dataCompany.employersQuantity : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: 10, marginTop: 10 }}>
                                <Col style={{ color: 'gray' }}>Actividad económica (core)</Col>
                                <Col align="start">
                                    {dataCompany == 0?.economicActivityName ? dataCompany.economicActivityName : ' - '}
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
                                    {dataCompany == 0?.salaryPaymentEntityName ? dataCompany.salaryPaymentEntityName : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{ marginBottom: 10, marginTop: 10 }}>
                                <Col style={{ color: 'gray' }}>Entidad financiera en la que opera</Col>
                                <Col align="start">
                                    {dataCompany == 0?.operatingEntityNames ? dataCompany.operatingEntityNames : ' - '}
                                </Col>

                                <Col style={{ color: 'gray' }}>Lista de Actividad Economica</Col>
                                <Col sm={4} align="start">
                                    {dataCompany == 0?.economicActivityName ? dataCompany.economicActivityName : ' - '}
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
                                    {dataCompany?.promotorPhone ? dataCompany.promotorPhone : ' No se '}
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
                                    {dataCompany?.o ? dataCompany.o : ' No encuentro '}
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
                            </Row>
                            {dataCompany.cases?.lenght > 0 ? dataCompany.cases.map((item: { caseStatusName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; duration: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; modifiedAt: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; modifiedByName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }) => {

                                <Row>
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
                                        <Col>{item.caseStatusName}</Col>
                                        <Col>{item.duration} días</Col>
                                        <Col>{item.modifiedAt}</Col>
                                        <Col>{item.modifiedByName}</Col>
                                    </Row>
                                </Row>

                            }) : <Row style={{
                                marginBottom: 10,
                                marginTop: 10,
                                borderColor: 'rgb(237, 240, 244)',
                                borderStyle: 'solid',
                                borderWidth: 'thin',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderTop: 'none'
                            }}>
                                <Col style={{ display: 'flex', justifyContent: 'center' }}>Sin datos</Col>
                            </Row>}
                        </Row>
                    </Card>
                </Row>
            </Row>
        </>
    )
}