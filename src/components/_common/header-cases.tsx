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
import { CanActive } from "auth/CanActive";
import { permissionFront } from 'auth/permissions';

export default function HeaderCases(props: {subject: any}) {

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
                <Row style={{ marginTop: '50px', display: 'flex', alignItems: 'start', height: '30px' }}>
                    <Col sm={1}>
                        <img src="/backIcon.png" alt="Atrás" height="20" onClick={() => { window.history.back() }} />
                    </Col>
                    <Col sm={5} style={{ marginRight: 'auto'}}>
                        <Row>
                            <h4>{props?.subject ? props.subject : 'Sin datos del asunto'}</h4>
                        </Row>
                    </Col>
                    <Col sm={2} style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end' }} align='end'>
                        <Row align='end' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Col > <Button variant="secondary" style={{background: '#FFF', color: 'black' }}>Edit</Button>{' '}</Col>
                            <Col>
                                <DropdownButton variant="secondary"align="end" id="dropdown-basic-button" title="..." style={{background: '#FFF', color: 'black' }}>
                                    <Dropdown.Item href="#/action-1">Clonar</Dropdown.Item>
                                    {CanActive(permissionFront.CAN_REMOVE_CASES) && (
                                        <Dropdown.Item onClick={deleteHandle}>Eliminar</Dropdown.Item>
                                    )}
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>{" "}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}