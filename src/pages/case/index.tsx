import {useState} from "react";
import {listCompanies} from "../../services/companyService";
import {CompanyModel} from "../../models/Company";
import Cases from "components/case/data-case";
import SideFilter from "components/case/side-filter";
import Kanban from "components/_common/kanban";
import styles from '../../../public/styles/case/Case.module.scss'
import { Card, Col, Container, Row } from "react-bootstrap";

import StoreProvider from "store/filter/StoreProvider";

export default function Index() {
    const styles = {
        marginTop:'15px',
        backGroundColor: '#edf0f4'
    }
    return ( 
        <>
            <Container style={styles} fluid>
                <StoreProvider>
                    <Row>
                        <Col xs={3}>
                            <SideFilter/>
                        </Col>
                        <Col xs={9} >
                            <div suppressHydrationWarning={true} style={{backgroundColor: '#edf0f4',overflow: "auto", display: "flex" }}>
                            {process.browser && <Kanban  />}
                            </div>
                        </Col>
                    </Row>
                </StoreProvider>
            </Container>
        </>
    )
}
//  export async function getServerSideProps() {
//    const data = await listCompanies()
   
//    return {props: data}
//  }