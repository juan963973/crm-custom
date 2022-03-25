import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "components/_common/side-filter";
import Kanban from "components/_common/kanban";
import FilteringResolvers from "components/_common/filtering-resolvers";

import FilterProvider from "store/filter/FilterProvider";
import FilterContextResolutionAreasProvider from "store/filterResolutionAreas/FilterProvider";

const page = 'cases';

export default function Index() {
    return ( 
        <>
            <Container style={{background: '#edf0f4'}} fluid>
                <FilterProvider>
                    <FilterContextResolutionAreasProvider>
                        <Row style={{padding: '6px', background: '#FFF'}}>
                            <Col xs={12} >
                                <FilteringResolvers />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} style={{marginLeft: '27px', padding: '7px 0' }}>
                                <h6>Vista Kanban</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <SideFilter page={page}/>
                            </Col>
                            <Col xs={9} >
                                <div suppressHydrationWarning={true} style={{backgroundColor: '#edf0f4',overflow: "auto", display: "flex" }}>
                                    {process.browser && <Kanban page={page} />}
                                </div>
                            </Col>
                        </Row>
                    </FilterContextResolutionAreasProvider>
                </FilterProvider>
            </Container>
        </>
    )
}
//  export async function getServerSideProps() {
//    const data = await listCompanies()
   
//    return {props: data}
//  }