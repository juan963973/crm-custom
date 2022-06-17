import { useState } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { Col, Container, Row, Button } from "react-bootstrap";

import SideFilter from "components/_common/side-filter";
import Kanban from "components/_common/kanban";

import DataTable from "components/_common/data-table";

import { BsFillHouseFill } from 'react-icons/bs';

import FilterProvider from "store/filter/FilterProvider";
import FilterContextResolutionAreasProvider from "store/filterResolutionAreas/FilterProvider";

import CallToActions from "components/_common/call-to-actions";

export default function Index({module}:any) {
    const [viewFilter, setViewFilter] = useState(false);
    const [viewKanban, setViewKanban] = useState(false);

    const ModuleText   = 'Empresa';
    const textList   = 'Vista de Lista';
    const textKanban = 'Vista Kanban';

    const params = {
        ModuleText,
        textList,
        textKanban,
        setViewFilter,
        setViewKanban,
        viewFilter,
        viewKanban,
        module
    }

    return ( 
        <>
            <Container style={{background: '#edf0f4'}} fluid>
                <FilterProvider>
                    <FilterContextResolutionAreasProvider>

                        <Row style={{padding: '16px 0 10px 0', background: '#FFF', marginTop: '50px'}}>
                            <CallToActions params={params}  />
                        </Row>
                        
                        <Row>
                            <Col xs={2} style={{marginLeft: '27px', padding: '7px 0' }}>
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/"><BsFillHouseFill/> Inicio</Breadcrumb.Item>
                                    {/* <Breadcrumb.Item active>
                                        {!viewKanban ? textList.toLowerCase(): textKanban.toLowerCase()}
                                    </Breadcrumb.Item> */}
                                    <Breadcrumb.Item active>{ModuleText}</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </Row>

                        <Row>
                            {viewFilter && (
                                <Col xs={3}>
                                    <SideFilter module={module}/>
                                </Col>
                            )}
                            
                            <Col xs={ viewFilter ? 9 : 12} >
                                {viewKanban && (
                                    <div suppressHydrationWarning={true} style={{backgroundColor: '#edf0f4',overflow: "auto", display: "flex" }}>
                                        {process.browser && <Kanban module={module} />}
                                    </div>
                                )}

                                {!viewKanban && ( <DataTable module={module} /> )}

                            </Col>
                        </Row>
                        
                    </FilterContextResolutionAreasProvider>
                </FilterProvider>
            </Container>
        </>
    )
}

export function getServerSideProps(req:any, res:any) {
    const module = req.resolvedUrl;
    return { props: { module } }
}