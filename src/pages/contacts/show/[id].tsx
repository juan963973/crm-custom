import {
    Button, Col, Container, Dropdown, DropdownButton, Row
} from "react-bootstrap";
import Overview3 from "components/_common/overview3";
import getContactData from "services/contactService";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import getCompanyData from "../../../services/companyService";

const page = "contacts";

export default function Show({ id, uri }: any) {
    const router = useRouter()
    let dataId = id
    const [dataContact, setDataContact] = useState({} as any)

    useEffect(() => {
        getContactData(id).then(d =>{
            setDataContact(d as any)
        })
    }, []);

    const data = dataContact;

    console.log('idContact', id);

    let dataIdCase = {
        id: id,
        view: 'contactId'
    };

    if (!dataContact)
        return <></>;

    return (
        <>
            <Container className="shadow-sm p-3 mb-3 bg-white rounded mt-2">
                <Row style={{ marginTop: '50px', display: 'flex', alignItems: 'start', height: '30px' }}>
                    <Col sm={1} style={{ width: '50px'}}>
                        <img src="/backIcon.png" alt="Atrás" height="20" onClick={() => { window.history.back() }} />
                    </Col>

                    <Col  sm={1} style={{ width: '70px'}}>
                        <img src="/contactIcon.png" style={{ height: '40px' }} />
                    </Col>
                    <Col sm={8} style={{ marginRight: 'auto'}}>

                        <h4>{data.fullName}</h4>

                    </Col>
                    <Col sm={2} style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end'}} align='end'>
                        <Row align='end' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {/*<Col>*/}
                            {/*    <Button variant="primary">Enviar correo</Button>{' '}*/}
                            {/*</Col>*/}
                            <Col > <Button variant="secondary" style={{background: '#FFF', color: 'black' }}>Edit</Button>{' '}</Col>
                            <Col>
                                <DropdownButton variant="secondary"align="end" id="dropdown-basic-button" title="..." style={{background: '#FFF', color: 'black' }}>
                                    <Dropdown.Item href="#/action-1">Clonar</Dropdown.Item>
                                    <Dropdown.Item>Eliminar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>{" "}
                            </Col>
                        </Row>
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
                                <Overview3 page={page} id={id} dataIdCase={dataIdCase}
                                data={data}/>
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