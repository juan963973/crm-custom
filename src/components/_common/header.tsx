import {
    Button,
    Col,
    Container,
    Row,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import { useRouter } from "next/router";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

export default function Header(cases: { cases: { id: any; }; }) {
    console.log('header', cases.cases.subject)

    if (typeof window !== "undefined") {

        injectStyle();

    }

    const deleteHandle = () => {

        toast.success("Registro eliminado con exito!", {

            position: "top-center",

            autoClose: 2000,

            hideProgressBar: false,

            closeOnClick: true,

            pauseOnHover: true,

            draggable: true,

            progress: undefined,

        });

        setTimeout(() => {

            router.push(`/cases`);

        }, 2000);

    };
    const router = useRouter()
    return (
        <>
            <Container className="shadow-sm p-3 mb-3 bg-white rounded mt-2">
                <ToastContainer />
                <Row style={{ marginTop: '50px', display: 'flex' }}>
                    <Col sm={2} style={{ alignItems: 'center' }} >
                        <img src="/backIcon.png" alt="Atrás" height="20" style={{ alignItems: 'center' }} onClick={() => { window.history.back() }} />
                    </Col>
                    <Col sm={5} style={{ marginLeft: '-10%' }}>
                        <Row>
                            <h4>{cases.cases.subject}</h4>
                        </Row>
                        <Row>
                            <h6>DESCRIPCIÓN</h6>
                        </Row>
                    </Col>
                    <Col sm={3} style={{ marginLeft: 'auto' }}>
                        <Row >
                            <Col > <Button variant="secondary">Edit</Button>{' '}</Col>
                            <Col>
                                <DropdownButton align="end" id="dropdown-basic-button" title="...">
                                    <Dropdown.Item href="#/action-1">Clonar</Dropdown.Item>
                                    <Dropdown.Item onClick={deleteHandle}>Eliminar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>{" "}
                            </Col>
                            <Col>«  »</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}