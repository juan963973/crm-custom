import React, { useEffect, useState } from "react";
import type { ReactElement } from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import Image from 'next/image'
import login from '../../../public/login.webp'
import logo from '../../../public/logo.svg'
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

export default function Login() {
    const [body, setBody] = useState({ userName: '', password: '' })
    const router = useRouter();
    const [textButton, setTextButton] = useState('Iniciar Sesión')
    const [btnDisabled, setBtnDisabled] = useState(false)

    const inputChange = ({ target }:any) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    if (typeof window !== "undefined") {
        injectStyle();
    }
    
    const localStorageSetItem = async (data:any) => {
        await localStorage.setItem('auth', JSON.stringify(data))
    }
  
    function handleSubmit(event:any) {
        event.preventDefault();
        setTextButton('Iniciando ');
        setBtnDisabled(true);
        if(body.userName.length == 0 || body.password.length == 0) {
            toast.error("Los campos son obligatorios!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });            
            setTextButton('Iniciar Sesión');
            setBtnDisabled(false);
            return
        }

        //TODO: encriptar password
        axios.post(`${process.env.BASE_URL}/users/login`, body)
            .then(({ data }) => {

                // let data1 = {
                //     "token": {
                //       "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcEE2YVhQeXFVUFcxdFhLdnhjd2cyVGxxQTZoVmR1ZjlZZVB6Z2lJUnNBIn0.eyJleHAiOjE2NTI5ODAyOTQsImlhdCI6MTY1Mjk3NjY5NCwianRpIjoiZTc1ZGNiMTItYzlkNC00MjU3LTg0ZTctYWVkODg0ZjBiZjdiIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9tYXN0ZXIiLCJhdWQiOlsibWFzdGVyLXJlYWxtIiwiYWNjb3VudCJdLCJzdWIiOiIyZjRlMjM2NS0yYTJkLTQzODMtODFhZi02MTRiNmQ5MWVhM2YiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjdXN0b20tY3JtIiwic2Vzc2lvbl9zdGF0ZSI6ImRlYWZlZjdmLTBjNzEtNGE2Ni1iNzRiLWRlYjYxZThkNDNhNyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiY3JlYXRlLXJlYWxtIiwiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJtYXN0ZXItcmVhbG0iOnsicm9sZXMiOlsidmlldy1yZWFsbSIsInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJkZWFmZWY3Zi0wYzcxLTRhNjYtYjc0Yi1kZWI2MWU4ZDQzYTciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJqb3NlIG1hbnVlbCBtY2xhbmdobGluIG1hdGllbnpvIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiam9zZSBtYW51ZWwiLCJmYW1pbHlfbmFtZSI6Im1jbGFuZ2hsaW4gbWF0aWVuem8iLCJlbWFpbCI6Impvc2UubWNsYW5naGxpbkBiYW5jb250aW5ldGFsLmNvbS5weSJ9.U004Ig_rfdF-7Im4tdwOKQE94-_WJ-ra6MLm1XN5ND272zxe-ZrBDiPTRATm-qqImfaK1CZGevTvfEL9d6a6ah3TVPNqdEamB50QShjtXeuuz5v_ykNsCUEVMenjMZ45kDOEw13JqOvcxRvWVzYKHA4hp4vuWvO3KFTpSi0sS6QS0XwC3Tyvw0fDM4diZwNsHdkcLCUyjoA5WAN21H1-qTD80OAx4XHCjEEjGdlOgA6ToNXfx5duP0RD3a88I4t05SfLd6XJx4kwiM-P-bJrRi-VZLPcBQ3mtE8qlBf4j9qjmAsXAUHeDTXF1hIOOcY0ONAPPGTpA3_p0xg8djd46w",
                //       "expires_in": 3600,
                //       "refresh_expires_in": 1800,
                //       "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjMGY3OTk3ZS1lYjBhLTQzZmQtYTIzOC1lNWI4ZTY1OWI0MzIifQ.eyJleHAiOjE2NTI5Nzg0OTQsImlhdCI6MTY1Mjk3NjY5NCwianRpIjoiMDQxNmU4MGItZTM3Ni00ZGEwLWI5ZTUtY2U5MmI5M2M4Mjk0IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9tYXN0ZXIiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL21hc3RlciIsInN1YiI6IjJmNGUyMzY1LTJhMmQtNDM4My04MWFmLTYxNGI2ZDkxZWEzZiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJjdXN0b20tY3JtIiwic2Vzc2lvbl9zdGF0ZSI6ImRlYWZlZjdmLTBjNzEtNGE2Ni1iNzRiLWRlYjYxZThkNDNhNyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJkZWFmZWY3Zi0wYzcxLTRhNjYtYjc0Yi1kZWI2MWU4ZDQzYTcifQ.LWmLL6KsPSxw8W-zT5A5c1OcBTVN9ud6XfisDH5vL20",
                //       "token_type": "Bearer",
                //       "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwcEE2YVhQeXFVUFcxdFhLdnhjd2cyVGxxQTZoVmR1ZjlZZVB6Z2lJUnNBIn0.eyJleHAiOjE2NTI5ODAyOTQsImlhdCI6MTY1Mjk3NjY5NCwiYXV0aF90aW1lIjowLCJqdGkiOiI5ZDBiMTI5Mi1hN2VhLTQ3MGYtOGU1OC02MGFlZjg5ODVjNDciLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImN1c3RvbS1jcm0iLCJzdWIiOiIyZjRlMjM2NS0yYTJkLTQzODMtODFhZi02MTRiNmQ5MWVhM2YiLCJ0eXAiOiJJRCIsImF6cCI6ImN1c3RvbS1jcm0iLCJzZXNzaW9uX3N0YXRlIjoiZGVhZmVmN2YtMGM3MS00YTY2LWI3NGItZGViNjFlOGQ0M2E3IiwiYXRfaGFzaCI6IlFGWHVYcFVFWHBWalZhNXpfNFBqeUEiLCJhY3IiOiIxIiwic2lkIjoiZGVhZmVmN2YtMGM3MS00YTY2LWI3NGItZGViNjFlOGQ0M2E3IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiam9zZSBtYW51ZWwgbWNsYW5naGxpbiBtYXRpZW56byIsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIiwiZ2l2ZW5fbmFtZSI6Impvc2UgbWFudWVsIiwiZmFtaWx5X25hbWUiOiJtY2xhbmdobGluIG1hdGllbnpvIiwiZW1haWwiOiJqb3NlLm1jbGFuZ2hsaW5AYmFuY29udGluZXRhbC5jb20ucHkifQ.TPLBkRwxmOcj0Hvopz8HmApi1KSZ_pYqhNCaDWvoi2LVdtRPYu_9-AArXyHrSyQqOHJ9jloPYZHsmPuq6u9Wx8H-haXMN9PR2qF9xxwbahQPTYtlN5dJl68iwzFcbCT_CQGVUi_UUxbhE9IPy1qlhtBXzUmXySYUb_H3_BMwaGHaiADXIJRwa3bh5Mm-2v_bT7T7zZhvmvX_NOmIIcfm0ayyctlsmXEmkJDYhDi-qkemmo5_YKQ_dGbh6KfzRK7pBPSeiu0Eu-tSHnza-leX4wTWRaxk5cfHr6G98xlMyNhyZxeLmJVVVt0_B4e5U4rHWcLH6NUtF3bHz3d2bGx09g",
                //       "notbeforepolicy": 0,
                //       "session_state": "deafef7f-0c71-4a66-b74b-deb61e8d43a7",
                //       "scope": "openid profile email"
                //     },
                //     "user": {
                //       "id": "5a71a2d1-2e9e-4aca-bf90-600edafdc1bd",
                //       "userName": "admin",
                //       "roles": [
                //         {
                //           "id": "a5140eab-72cf-4588-afb3-b7105ad830ff",
                //           "name": "custom-crm-admin",
                //           "functionPoint": [
                //             "CAN_ACCESS_ROL",
                //             "CAN_MANAGE_ROL",
                //             "CAN_ACCESS_USERS",
                //             "CAN_MANAGE_USERS",
                //             "CAN_ACCESS_BULK",
                //             "CAN_MANAGE_BULK",
                //             "CAN_ACCESS_CASES",
                //             "CAN_MANAGE_CASES",
                //             "CAN_ACCESS_COMPANIES",
                //             "CAN_MANAGE_COMPANIES",
                //             "CAN_ACCESS_CONTACTS",
                //             "CAN_MANAGE_CONTACTS",
                //             "CAN_ACCESS_FILTER",
                //             "CAN_ACCESS_FULLSEARCH",
                //             "CAN_MANAGE_FULLSEARCH",
                //             "CAN_ACCESS_INFO",
                //             "CAN_MANAGE_INFO",
                //             "CAN_ACCESS_INFO",
                //             "CAN_ACCESS_VISITREPORT",
                //             "CAN_MANAGE_VISITREPORT",
                //             "CAN_ACCESS_SEARCH",
                //             "CAN_MANAGE_SEARCH"
                //           ]
                //         }
                //       ]
                //     }
                //   }

                localStorageSetItem(data).then(() => router.push('/cases'))
                // localStorageSetItem(data1).then(() => router.push('/cases'))
            }).catch(({ response }) => {
                toast.error(response, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTextButton('Iniciar Sesión');
                setBtnDisabled(false);
            })
    }
  
    return (
        <section className="vh-100" style={{backgroundImage: `url('/fondo-login.svg')`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center h-100">
                
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{padding: "30px", background: "white", borderRadius: "2px 0 0 2px", boxShadow:"0px 2px 30px #ccc6", borderRight: "2px solid #f1f1f1" }}>
                        <Form onSubmit={handleSubmit}>
                        <ToastContainer />
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start" style={{marginLeft: "-23px",  marginBottom: "20px"}}>
                                <Image
                                    src={logo}
                                    alt="Imágen inválida"
                                    width={200} 
                                    height={40} 
                                    objectFit="contain"
                                />
                                {/* <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-linkedin-in"></i>
                                </button> */}
                            </div>

                        

                            {/* <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div> */}
                            <div> <h4>Iniciar sesión</h4> </div>

                            <div> <p>para acceder a CRM</p> </div>

                            <div className="form-outline mb-4">
                                <Form.Control
                                    autoFocus
                                    type='text'
                                    name='userName'
                                    placeholder='Escriba una dirección de correo electrónico válida'
                                    value={body.userName}
                                    onChange={inputChange}
                                />
                            </div>

                            <div className="form-outline mb-3">
                                <Form.Control
                                    type='password'
                                    name='password'
                                    placeholder='Escriba la contraseña'
                                    value={body.password}
                                    onChange={inputChange}
                                    
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label">
                                        Recuerdame
                                    </label>
                                </div>
                                <a href="#!" className="text-body">¿Olvidó la contraseña?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Button type="submit" className="btn btn-primary btn-lg col-12" disabled={btnDisabled}>
                                    {textButton}
                                    {btnDisabled && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                </Button>
                                {/* <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p> */}
                            </div>

                        </Form>
                    </div>

                    <div className="col-md-9 col-lg-6 col-xl-5" style={{background: "white",boxShadow: "15px 0px 30px #ccc6", borderRadius: "0 2px 2px 0", textAlign: "center" }}>
                        <Image
                            src={login}
                            alt="Imágen inválida"
                            //   objectFit="contain"
                            //   className="img-fluid"
                            />
                            <h4 style={{fontSize: "1rem" }}>Customer Relationship Management</h4>
                            <p>Sistema de gestion de clientes para empresas v0.1.12</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }

  Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            {page}
        </>
    )
  }