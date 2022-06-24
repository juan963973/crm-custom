import {
    Button, Col, Container, Row, DropdownButton, Dropdown, ListGroup
} from "react-bootstrap";
import getCompanyData from "services/companyService";
import Overview2 from "components/_common/overview2";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const page = "companies";

export default function Show({ id, uri }: any) {
    // const id = 2

    const [dataCompany, setdataCompany] = useState({} as any)

    const router = useRouter()

    useEffect(() => {
        getCompanyData(id).then(d =>{ 
            setdataCompany(d as any)
        })
    }, []);

    let dataIdCase = {
        id: id,
        view: 'companyId'
    }

    if (!dataCompany)
        return <></>

    return (
        <>
            <Container className="shadow-sm p-3 mb-3 bg-white rounded mt-2">
            <Row style={{ marginTop: '50px', display: 'flex', alignItems: 'start', height: '30px' }}>
                    <Col sm={1} style={{ width: '50px'}}>
                        <img src="/backIcon.png" style={{ cursor: 'pointer' }} alt="Atrás" height="20" onClick={() => { window.history.back() }} />
                    </Col>
                    
                    <Col  sm={1} style={{ width: '70px'}}>
                        <img src="/compayIcon.png" style={{ height: '40px' }} />
                    </Col>
                    <Col sm={8} style={{ marginRight: 'auto'}}>

                            <h4>{dataCompany.name}</h4>

                    </Col>
                    {/*<Col sm={2} style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end' }} align='end'>*/}
                    {/*    <Row align='end' style={{ display: 'flex', justifyContent: 'flex-end' }}>*/}
                    {/*        <Col > <Button variant="secondary" style={{background: '#FFF', color: 'black' }}>Edit</Button>{' '}</Col>*/}
                    {/*        <Col>*/}
                    {/*            <DropdownButton variant="secondary"align="end" id="dropdown-basic-button" title="..." style={{background: '#FFF', color: 'black' }}>*/}
                    {/*                <Dropdown.Item href="#/action-1">Clonar</Dropdown.Item>*/}
                    {/*                <Dropdown.Item>Eliminar</Dropdown.Item>*/}
                    {/*                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                    {/*            </DropdownButton>{" "}*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Col>*/}
                </Row>
            </Container>

            <Container style={{ display: 'block' }}>
                <Row>
                <Col sm={2}>
                        <b>Lista relacionada</b>
                        <Col>
                            <ListGroup style={{ width: '95%' }}>
                                <ListGroup.Item as="a" action href="#cases">
                                    Casos
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Col>

                    <Col style={{
                        backgroundColor: '#edf0f4'
                    }}>
                        <Row>
                            <Row sm={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#edf0f4' }}>

                                <Col sm={4} style={{ width: 'auto' }}>
                                    <Button variant="primary">Visión general</Button>
                                </Col>
                            </Row>

                            <Row style={{
                                maxHeight: "70vh", overflow: "auto", backgroundColor: '#edf0f4'
                            }}>
                                <Overview2 page={page} id={id} dataIdCase={dataIdCase} dataCompany={dataCompany}/>
                            </Row>



                        </Row>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export async function getServerSideProps(req: any, res: any) {
    const {
        query: { id },
        resolvedUrl,
    } = req;
    const uri = resolvedUrl.split("/")[1];
    return {
        props: { id, uri },
    };
}