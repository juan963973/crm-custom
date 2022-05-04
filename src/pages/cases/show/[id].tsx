import {
    Button, Col, Container, Form, Row, Card, InputGroup, FormControl,
    ButtonGroup, ToggleButton, Nav, Tabs, Tab
} from "react-bootstrap";
import { useRouter } from 'next/router'
import { useState } from "react";
import React, { forwardRef, useRef } from 'react'
import { CaseDetailModel } from ".../../models/Case";
import Overview from "components/_common/overview";

const page = "cases";

export default function Show({ id, uri }: any) {
    const [cases, setCases] = useState<CaseDetailModel[]>([] as CaseDetailModel[])
    const router = useRouter()
    // const id = id

    let data = cases

    return (
        <>

            <Container className="shadow-sm p-3 mb-3 bg-white rounded mt-2">
                <Row style={{marginTop: '50px'}}>
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
                            <h6>DESCRIPCIÓN</h6>
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
                        <b>Lista relacionada</b>
                        <p>Notas</p>
                        <p>Historial de Estado</p>
                        <p>Adjuntos</p>
                        <p>Actividades abiertas</p>
                        <p>Actividades cerradas</p>
                        <p>Enlaces</p>
                        {/* <p className="text-primary">Add link</p> */}
                    </Col>

                    <Col style={{
                        backgroundColor: '#edf0f4'
                    }}>
                        <Row>
                            <Row sm={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#edf0f4' }}>

                                <Col sm={4} style={{ width: 'auto' }}>

                                    <Button variant="primary">Visión general</Button>
                                    {/* 
                                    <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="flex-row" variant="pills">
                                        <Tab eventKey="overview" title="Overview">
                                            <Overview />
                                        </Tab>
                                        <Tab eventKey="timeline" title="Timeline">
                                            <Timeline />
                                        </Tab>
                                    </Tabs> */}
                                </Col>
                            </Row>

                            <Row style={{
                                maxHeight: "25rem", overflow: "auto", backgroundColor: '#edf0f4'
                            }}>
                                <Overview page={page} id={id} />
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
    console.log('id', id)
    return {
      props: { id, uri },
    };
  }