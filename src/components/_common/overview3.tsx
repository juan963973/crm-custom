import React from "react";
import {Col, Row, Card} from "react-bootstrap";
import NewButtonCase from "./newButtonCase";

export default function Overview3({dataIdCase, data}: any) {
    const {cases, companiesName } = data;

    return (
        <>
            <Row style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15}}>
                <Row style={{width: '99%'}}>
                    <Card body>
                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DATOS BÁSICOS</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Tipo de Documento</Col>
                                <Col align="start">
                                    {data?.documentTypeName ? data.documentTypeName : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Nro. de documento</Col>
                                <Col sm={4} align="start">
                                    {data?.documentNumber ? data.documentNumber : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Estado Civil</Col>
                                <Col align="start">
                                    {data?.civilStatusName ? data.civilStatusName : ' - '}
                                </Col>
                                <Col style={{color: 'gray'}}>
                                    Nacionalidad
                                </Col>
                                <Col sm={4} align="start">
                                    {data?.nationalityName ? data.nationalityName : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Género contacto</Col>
                                <Col align="start">
                                    {data?.genderName ? data.genderName : ' - '}
                                </Col>
                                <Col style={{color: 'gray'}}>
                                    Fecha de nacimiento
                                </Col>
                                <Col sm={4} align="start">
                                    {data?.dateOfBirth ? data.dateOfBirth : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Edad contacto</Col>
                                <Col align="start">
                                    {data?.contactAge ? data.contactAge : ' - '}
                                </Col>
                                <Col style={{color: 'gray'}}>
                                    Tipo de cartera
                                </Col>
                                <Col sm={4} align="start">
                                    {data?.walletTypeName ? data.walletTypeName : ' - '}
                                </Col>
                            </Row>
                        </Row>
                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DATOS DEL CLIENTE</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Código cliente</Col>
                                <Col align="start">
                                    {data?.clientCode ? data.clientCode : ' - '}
                                </Col>
                                <Col style={{color: 'gray'}}>Estado</Col>
                                <Col sm={4} align="start">
                                    {data?.clientStatus ? data.clientStatus : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>¿Es cliente?</Col>
                                <Col align="start">
                                    {data?.isClient ? data.isClient : ' - '}
                                </Col>
                                <Col style={{color: 'gray'}}>¿Es cliente salario?</Col>
                                <Col sm={4} align="start">
                                    {data?.isClientSalary ? data.isClientSalary : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>¿Es funcionario?</Col>
                                <Col align="start">
                                    {data?.isClerk ? data.isClerk : ' - '}
                                </Col>
                                <Col style={{color: 'gray'}}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>

                        </Row>

                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DATOS DEL CONTACTO</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Correo electrónico</Col>
                                <Col align="start">
                                    {data?.email ? data.email : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Correo electrónico secundario</Col>
                                <Col sm={4} align="start">
                                    {data?.secondaryEmail ? data.secondaryEmail : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Móvil</Col>
                                <Col align="start">
                                    {data?.mobile ? data.mobile : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Teléfono fijo</Col>
                                <Col sm={4} align="start">
                                    {data?.phone ? data.phone : ' - '}
                                </Col>
                            </Row>

                        </Row>

                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DIRECCIÓN DEL CONTACTO</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Dirección</Col>
                                <Col align="start">
                                    {data?.address ? data.address : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Nro. domicilio</Col>
                                <Col sm={4} align="start">
                                    {data?.homeNumber ? data.homeNumber : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Referencia</Col>
                                <Col align="start">
                                    {data?.reference ? data.reference : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Departamento</Col>
                                <Col sm={4} align="start">
                                    {data?.departmentName ? data.departmentName : ' - '}
                                </Col>
                            </Row>

                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Ciudad</Col>
                                <Col align="start">
                                    {data?.cityName ? data.cityName : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Barrio</Col>
                                <Col sm={4} align="start">
                                    {data?.neighborhood ? data.neighborhood : ' - '}
                                </Col>
                            </Row>

                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>¿Enviar correspondencia a esta dirección?</Col>
                                <Col align="start">
                                    {data?.sendCorrespondenceUbications === null ? 'No' : ' Sí '}
                                </Col>

                                <Col style={{color: 'gray'}}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>

                        </Row>

                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DIRECCIÓN PARA CORRESPONDENCIA</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Domicilio para correspondencia</Col>
                                <Col align="start">
                                    {data?.mailingStreet ? data.mailingStreet : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>País para correspondencia</Col>
                                <Col sm={4} align="start">
                                    {data?.mailingCountry ? data.mailingCountry : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Estado para correspondencia</Col>
                                <Col align="start">
                                    {data?.mailingState ? data.mailingState : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Ciudad para correspondencia</Col>
                                <Col sm={4} align="start">
                                    {data?.mailingCity ? data.mailingCity : ' - '}
                                </Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DATOS LABORALES</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Lugar de trabajo</Col>
                                <Col align="start">
                                    {data?.workPlace ? data.workPlace : ' - '}
                                </Col>

                                {/* <Col style={{color: 'gray'}}>Salario actual</Col>
                                <Col sm={4} align="start">
                                    {data?.currentSalary ? data.currentSalary : ' - '}
                                </Col> */}
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Teléfono laboral</Col>
                                <Col align="start">
                                    {data?.workPhone ? data.workPhone : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DATOS EMPRESA</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Nombre de empresa</Col>
                                <Col align="start">
                                    {data?.workPlace ? data.workPlace : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Empresas lookup</Col>
                                <Col sm={4} align="start">
                                    {companiesName?.length > 0 ? companiesName.map((el: any) =>{
                                        return (
                                            <p key={el}>{el}</p>
                                        )
                                    }) : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Actividad económica</Col>
                                <Col align="start">
                                    {data?.economicActivity ? data.economicActivity : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Descripción</Col>
                                <Col sm={4} align="start">{data?.description ? data.description : ' - '}</Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DESCRIPCIÓN DEL CONTACTO</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Descripción</Col>
                                <Col align="start">
                                    {data?.description ? data.description : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>ATENCIÓN</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Banca</Col>
                                <Col align="start">
                                    {data?.bancaName ? data.bancaName : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Sucursal BC</Col>
                                <Col sm={4} align="start">
                                    {data?.branchName ? data.branchName : ' - '}
                                </Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Gerente</Col>
                                <Col align="start">
                                    {data?.branchManagerClerkUserName ? data.branchManagerClerkUserName : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Team Leader</Col>
                                <Col sm={4}
                                     align="start">{data?.teamLeaderClerkUserName ? data.teamLeaderClerkUserName : ' - '}</Col>
                            </Row>

                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Supervisor</Col>
                                <Col align="start">
                                    {data?.supervisorClerkUserName ? data.supervisorClerkUserName : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Oficial</Col>
                                <Col sm={4} align="start">{data?.officialUserName ? data.officialUserName : ' - '}</Col>
                            </Row>
                        </Row>

                        <Row className='mt-200' style={{marginBottom: 20, marginTop: 20}}>
                            <Row>
                                <Col><h6>DATOS REGISTRO</h6></Col>
                            </Row>
                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Creado por</Col>
                                <Col align="start">
                                    {data?.userWhoCreatedName ? data.userWhoCreatedName : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}>Propietario del contacto</Col>
                                <Col sm={4}
                                     align="start"> {data?.caseOwnerId ? data.caseOwnerId : ' - '}</Col>
                            </Row>

                            <Row align="end" style={{marginBottom: '5px'}}>
                                <Col style={{color: 'gray'}}>Modificado por</Col>
                                <Col align="start">
                                    {data?.userWhoModifiedName ? data.userWhoModifiedName : ' - '}
                                </Col>

                                <Col style={{color: 'gray'}}></Col>
                                <Col sm={4} align="start"></Col>
                            </Row>
                        </Row>
                    </Card>
                </Row>
            </Row>

            <Row style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15}}>
                <Row style={{width: '99%'}}>
                    <Card body>
                        <Row className='mt-200'>
                            <Col align="start">
                                <h6 id="cases">
                                    Casos
                                </h6>
                            </Col>
                            <Col align="end">
                                <NewButtonCase dataIdCase={dataIdCase}/>
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
                                <Col style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: 10,
                                    marginTop: 10,
                                    borderColor: 'rgb(237, 240, 244)',
                                    borderStyle: 'solid',
                                    borderWidth: 'thin',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                }}>Sin datos</Col>
                            </Row>}
                        </Row>
                    </Card>
                </Row>
            </Row>
        </>
    )
}