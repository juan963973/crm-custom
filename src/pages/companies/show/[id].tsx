import {
    Button, Col, Container, Form, Row, Card, InputGroup, FormControl,
    ButtonGroup, ToggleButton, Nav, Tabs, Tab
} from "react-bootstrap";
import { useRouter } from 'next/router'
import { CaseDetailModel } from ".../../models/Case";
import getCompanyData from "services/companyService";
import Overview from "components/_common/overview";
import Overview2 from "components/_common/overview2";

const page = "cases";

export default function Show() {


    const id = 2
    // let data = cases

    let data: any = getCompanyData(id)

    let dataIdCase = {
        id: id,
        view: 'companies'
    }

    return (
        <>

            <Container className="shadow-sm p-3 mb-3 bg-white rounded mt-2">
                <Row style={{marginTop: '50px'}}>
                    <Col sm={1} style={{width: '30px'}} >
                        <h4>
                            ←
                        </h4>
                    </Col>
                    <Col sm={1}>
                        <img src="/compayIcon.png" style={{ height: '55px' }} />
                    </Col>
                    <Col>
                        <Row>
                            <h4> {data.name} </h4>
                        </Row>
                        <Row>
                            <h6>Add tags</h6>
                        </Row>
                    </Col>
                    <Col align="end">
                        <Button variant="secondary">Editar</Button>{' '}
                        <Button variant="secondary">...</Button>{' '}
                        «
                        »
                    </Col>
                </Row>
            </Container>

            <Container style={{ display: 'block' }}>
                <Row>
                    {/* <Col sm={2}>
                        <b>Related List</b>
                        <p>Notes</p>
                        <p>Historial de Estado</p>
                        <p>Attachments</p>
                        <p>Open activities</p>
                        <p>Close activities</p>
                        <p>Links</p>
                        <p className="text-primary">Add link</p>
                    </Col> */}

                    <Col style={{
                        backgroundColor: '#edf0f4'
                    }}>
                        <Row>
                            <Row sm={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#edf0f4' }}>

                                <Col sm={4} style={{ width: 'auto' }}>

                                    <Button variant="primary">Resumen</Button>
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
                                <Overview2 page={page} id={id} dataIdCase={dataIdCase}/>
                            </Row>



                        </Row>
                    </Col>
                </Row>
            </Container>


        </>
    )
}