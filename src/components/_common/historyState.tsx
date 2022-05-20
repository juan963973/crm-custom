import axios from "axios"
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"

export default function HistoryState(cases: any) {

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
                        {cases.statusHistories?.map((item: { caseStatusName: boolean | ReactChild | ReactFragment | ReactPortal; duration: boolean | ReactChild | ReactFragment | ReactPortal; modifiedAt: boolean | ReactChild | ReactFragment | ReactPortal; modifiedByName: boolean | ReactChild | ReactFragment | ReactPortal }) => (
                            <Row style={{
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
                                <Col>{item.modifiedAt}</Col>
                                <Col>{item.modifiedByName}</Col>
                            </Row>
                        ))}
                    </Row>
                </Card>
            </Row>
        </Row>
    )
}            