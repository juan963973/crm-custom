import { Card, Col, Container, Dropdown, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import styles from '../../../../public/styles/case/Case.module.scss'
import { BsSearch } from "react-icons/bs";
import Textfield from "components/_common/text-field";
import Datefield from "components/_common/date-field";
import MultipleSelect from "components/_common/multiple-select";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FilteringResolvers() {
    const [checked, setChecked] = useState([]);
    const [checkList, setCheckList] = useState([]);

    useEffect(() => {
        const request: any = {
            method: "get",
            url: "https://localhost:5001/v1/api/Filter/cases",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };

        axios(request)
            .then(function (response) {
                setCheckList(response.data);
            })
            .catch(function (error) {
                alert(error);
            });
    }, []);

    const handleCheck = (event: any) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    var isChecked = (item: any) => checked.includes(item) ? true : false;

    return (
        <Row>
            {/* <Col>Filter icon</Col> */}
            <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="" style={{ borderColor: '#edf0f4', borderStyle: 'solid' }}>
                        ADMINISTRACIÓN
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Card.Header style={{ height: "400px", width: '200px', overflow: "auto" }}>
                            <InputGroup className="mb-3 mt-2 fixed">
                                <InputGroup.Text id="basic-addon1" className={styles.inputbotton}>
                                    <BsSearch />
                                </InputGroup.Text>
                                <FormControl
                                    className={styles.input}
                                    autoFocus
                                    placeholder="Buscar"
                                    aria-label="Buscar"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Card.Body >
                                <div className={`app ${styles.scrollCard}`} fluid style={{ height: "auto", width: 'auto', overflow: "auto" }}>
                                    <div className="checkList">
                                        <h6>Vistas Públicas:</h6>
                                        <div className="list-container">
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card.Header>


                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    )
}