import axios from "axios"
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { format } from "date-fns";
import { Card, Col, Row } from "react-bootstrap"

export default function HistoryState(cases: any) {

    function formaterDate(str: string) {
        let str1 = str.slice(0, 4)
        let str2 = str.slice(5, 7)
        let str3 = str.slice(8, 10)
        console.log('probado', str3, '...', str2, '...', str1);
        let newStr = `${str3}/${str2}/${str1}`;

        return newStr;
    }

    return (
        <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
            <Row style={{ width: '99%' }}>
                <Card body>
                    <Row className='mt-200'>
                        <Col>
                            <Row><h6 id="historyState">HISTORIAL DEL ESTADO</h6></Row>
                        </Col>
                    </Row>
                    <Row>
                        {cases?.statusHistories?.length > 0 ? (
                            <Row style={{
                                color: 'gray',
                                marginBottom: 10,
                                marginTop: 10,
                                borderColor: 'rgb(237, 240, 244)',
                                borderStyle: 'solid',
                                borderWidth: 'thin',
                                borderLeft: 'none',
                                borderRight: 'none'
                            }}>
                                <Col>Estado</Col>
                                <Col>Duración (días)</Col>
                                <Col>Tiempo modificación</Col>
                                <Col>Modificado por</Col>
                            </Row>
                        ) : 
                        <Row>
                                <Col style={{ display: 'flex',
                                justifyContent: 'center',
                                marginBottom: 10,
                                marginTop: 10,
                                borderColor: 'rgb(237, 240, 244)',
                                borderStyle: 'solid',
                                borderWidth: 'thin',
                                borderLeft: 'none',
                                borderRight: 'none', }}>Sin datos</Col>
                            </Row>}
                        {cases.statusHistories?.map((item: {
                            id: any;
                            caseStatusName: boolean | ReactChild | ReactFragment | ReactPortal; duration: boolean | ReactChild | ReactFragment | ReactPortal; modifiedAt : boolean | ReactChild | ReactFragment | ReactPortal; modifiedByName: boolean | ReactChild | ReactFragment | ReactPortal }) => (
                            <Row key={item.id} style={{
                                marginBottom: 10,
                                marginTop: 10,
                                borderColor: 'rgb(237, 240, 244)',
                                borderStyle: 'solid',
                                borderWidth: 'thin',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderTop: 'none'
                            }}>
                                <Col>{item.caseStatusName}</Col>
                                <Col>{item.duration} días</Col>
                                <Col>{formaterDate(item.modifiedAt)}</Col>
                                <Col>{item.modifiedByName}</Col>
                            </Row>
                        ))}
                    </Row>
                </Card>
            </Row>
        </Row>
    )
}            