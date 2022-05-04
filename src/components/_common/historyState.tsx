
import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { caseHistoryState } from "services/caseHistoryState"

export default function HistoryState() {

    const [stateItem, setStateItem] = useState([])
    useEffect(() => {
        axios.get(`https://localhost:5001/v1/api/Search/case-status?limit=5`).then((response) => {
            Promise.all(response.data.map(async (item: { id: number; value: string }) => {
                const caseHistoryStateItems = {
                    id: item.id,
                    value: item.value
                }
                return caseHistoryStateItems
            })).then((newProductList) => setStateItem(newProductList));
        });
    }, [])

    console.log('**********************************')
    console.log(stateItem)
    console.log('**********************************')
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15, marginTop: 15 }}>
            <Row style={{ width: '99%' }}>
                <Card body>
                    <Row className='mt-200'>
                        <Col>
                            <Row> <h6>HISTORIAL DEL ESTADO</h6></Row>
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
                        {stateItem.map((rootComment) => (
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
                                <Col>{rootComment.value}</Col>
                                <Col>0 días</Col>
                                <Col>Mar 7, 2022 05:41 AM</Col>
                                <Col>Responsable</Col>
                            </Row>
                        ))}
                    </Row>
                </Card>
            </Row>
        </Row>
    )
}            