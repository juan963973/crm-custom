import {
    Button,
    Col,
    Container,
    Row
} from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
import { CaseDetailModel } from ".../../models/Case";
import Overview from "components/_common/overview";
import { detail } from "services/caseService";

import HeaderCases from "components/_common/header-cases";

const page = "cases";

export default function Show({ id, uri }: any) {
    const [cases, setCases] = useState<CaseDetailModel[]>([] as CaseDetailModel[])
    useEffect(() => {

        detail(page, id)

            .then(data => {

                setCases(data)

            })

            .catch(e => console.log(e));

    }, [])
    const router = useRouter()

    let data = cases

    return (
        <>
            < HeaderCases subject={cases.subject} />

            <Container style={{ display: 'block' }}>
                <Row>
                    <Col sm={2}>
                        <b>Lista relacionada</b>
                        <Col>
                            <div><a href="#notes" style={{ textDecoration: 'none' }}>Notas</a></div>
                            <div><a href="#historyState" style={{ textDecoration: 'none' }}>Historial de Estado</a></div>
                            <div><a href="#attachments" style={{ textDecoration: 'none' }}>Adjuntos</a></div>
                            <div><a href="#openActivities" style={{ textDecoration: 'none' }}>Actividades abiertas</a></div>
                            <div> <a href="#closedActivities" style={{ textDecoration: 'none' }}>Actividades cerradas</a></div>
                            {/* <div><p>Enlaces</p></div> */}
                        </Col>
                        {/* <p className="text-primary">Add link</p> */}
                    </Col>

                    <Col style={{
                        backgroundColor: '#edf0f4'
                    }}>
                        <Row>
                            <Row sm={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#edf0f4' }}>

                                <Col sm={4} style={{ width: 'auto', paddingTop: "5px", paddingBottom: "5px", marginLeft: '6px' }}>

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

                            <Row
                                style={{
                                    maxHeight: "25rem",
                                    overflow: "auto",
                                    backgroundColor: "#edf0f4",
                                }}
                            >
                                <Overview page={page} id={id} cases={cases}/>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
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
