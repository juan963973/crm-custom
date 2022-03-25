import SideFilter from "components/_common/side-filter";
import Kanban from "components/_common/kanban";
import { Card, Col, Container, Row } from "react-bootstrap";

import FilterProvider from "store/filter/FilterProvider";

const styles = {
    marginTop:'15px',
    backGroundColor: '#edf0f4'
}
const page = 'cases';

export default function Index() {
    return ( 
        <>
            <Container style={styles} fluid>
                <FilterProvider>
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
                </FilterProvider>
            </Container>
        </>
    )
}
//  export async function getServerSideProps() {
//    const data = await listCompanies()
   
//    return {props: data}
//  }