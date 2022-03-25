import { Button, Col, Container, Form, Row, Card, InputGroup, FormControl, ButtonGroup, ToggleButton, Nav, Tabs, Tab } from "react-bootstrap";
import Select from 'react-select';
import { useEffect, useState } from "react";

import { listCases } from "../../../services/caseService";
import { CaseDetailModel } from ".../../models/Case";
import Index from "..";
import Overview from "./Overview";
import Timeline from "./TimeLine";

// const personOptions = [
//     { value: 'Jessi', label: 'Jessi' },
//     { value: 'Anto', label: 'Anto' },
//     { value: 'Marcos', label: 'Marcos' },
//     { value: 'New Persona', label: 'New Persona' }
// ]

// const EnterpriseOptions = [
//     { value: 'Patria', label: 'Patria' },
//     { value: 'Avalon', label: 'Avalon' },
//     { value: 'Bepsa', label: 'Bepsa' },
//     { value: 'New enterprise', label: 'New enterprise' }
// ]

// const idOptions = [
//     { value: 'Undefined', label: 'Undefined' },
//     { value: 'Cédula', label: 'Cédula' },
//     { value: 'RUC', label: 'RUC' },
//     { value: 'Pasaporte', label: 'Pasaporte' }
// ]

// const caseType = [
//     { value: 'Undefined', label: 'Undefined' },
//     { value: 'Consulta', label: 'Consulta' },
//     { value: 'Solicitud', label: 'Solicitud' },
//     { value: 'Reclamo', label: 'Reclamo' }
// ]

// const caseOrigin = [
//     { value: 'Undefined', label: 'Undefined' },
//     { value: 'Consulta', label: 'Consulta' },
//     { value: 'Solicitud', label: 'Solicitud' },
//     { value: 'Reclamo', label: 'Reclamo' }
// ]

// const caseStatus = [
//     { value: 'Undefined', label: 'Undefined' },
//     { value: 'Consulta', label: 'Consulta' },
//     { value: 'Solicitud', label: 'Solicitud' },
//     { value: 'Reclamo', label: 'Reclamo' }
// ]





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

            <Container className="shadow-sm p-3 mb-3 bg-white rounded mt-2">
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
                        backgroundColor: '#edf0f4'
                    }}>
                        <Row>
                            <Row sm={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#edf0f4' }}>
                                
                                <Col sm={4} style={{ width: 'auto'}}>

                                    <Button variant="primary">Overview</Button>
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
                                <Col align="end">Last Update : {cases?.updatedAt ? cases.updatedAt : ' - '}</Col>
                            </Row>

                            <Overview />
                        
                        </Row>
                    </Col>
                </Row>
            </Container>


        </>
    )
}
