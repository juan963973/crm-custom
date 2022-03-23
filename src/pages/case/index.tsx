import SideFilter from "components/_common/side-filter";
import Kanban from "components/_common/kanban";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Index() {
    const styles = {
        marginTop:'15px',
        backGroundColor: '#edf0f4'
    }
    const endpoint = "Filter/cases";
    return ( 
        <>
            <Container style={styles} fluid>
                <Row>
                    <Col xs={3}>
                        <SideFilter endPoint={endpoint}/>
                    </Col>
                    <Col xs={9} >
                        <div suppressHydrationWarning={true} style={{backgroundColor: '#edf0f4',overflow: "auto", display: "flex" }}>
                        {process.browser && <Kanban  />}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
//  export async function getServerSideProps() {
//    const data = await listCompanies()
   
//    return {props: data}
//  }