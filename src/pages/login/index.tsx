import React, { useEffect, useState } from "react";
import type { ReactElement } from 'react'; 

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { AxiosResponse, AxiosError } from 'axios'

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
    const [btnDisabledRecoveryAccount, setBtnDisabledRecoveryAccout] = useState(false)
    const [showLogin, setShowLogin] = useState(true)

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

    function handleSubmitRecoveryAccount (event:any) {
        event.preventDefault();
        toast.success('Enviamos un enlace a su email.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
  
    function handleSubmit (event:any) {
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
                localStorageSetItem(data).then(() => router.push('/cases'))
            }).catch(( response ) => {
                if (response == "TypeError: Cannot read properties of null (reading 'token')") {
                    toast.error('Email o password incorrecto.', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                setTextButton('Iniciar Sesión');
                setBtnDisabled(false);
                return
            })
    }
  
    return (
        <section className="vh-100" style={{backgroundImage: `url('/fondo-login.svg')`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center h-100">
                
                    {showLogin ?
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{padding: "30px", background: "white", borderRadius: "2px 0 0 2px", boxShadow:"0px 2px 30px #ccc6", borderRight: "2px solid #f1f1f1" }}>
                        <Form onSubmit={handleSubmit}>
                        <ToastContainer />
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start" style={{marginBottom: "20px"}}>
                                <Image
                                    src={logo}
                                    alt="Imágen inválida"
                                    width={200} 
                                    height={40} 
                                    objectFit="contain"
                                />
                            </div>

                            <div> <h4>Iniciar sesión</h4> </div>

                            <div> <p>para acceder a CRM</p> </div>

                            <div className="form-outline mb-4">
                                <Form.Control
                                    autoFocus
                                    type='email'
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
                                <a href="javascript:void(0)" onClick={(e:any) => setShowLogin(false)} className="text-body">¿Olvidó la contraseña?</a>
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
                    :
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{padding: "30px", background: "white", borderRadius: "2px 0 0 2px", boxShadow:"0px 2px 30px #ccc6", borderRight: "2px solid #f1f1f1" }}>
                        <Form onSubmit={handleSubmitRecoveryAccount}>
                        <ToastContainer />
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start" style={{marginBottom: "20px"}}>
                                <Image
                                    src={logo}
                                    alt="Imágen inválida"
                                    width={200} 
                                    height={40} 
                                    objectFit="contain"
                                />
                            </div>

                            <div> <h4>Recuperar Contraseña</h4> </div>

                            <div> <p>Ingrese el email</p> </div>

                            <div className="form-outline mb-4">
                                <Form.Control
                                    autoFocus
                                    type='email'
                                    name='userName'
                                    placeholder='Escriba una dirección de correo electrónico válida'
                                    value={body.userName}
                                    onChange={inputChange}
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <a href="javascript:void(0)" onClick={(e:any) => setShowLogin(true)} className="text-body">Ir a atrás</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Button type="submit" className="btn btn-primary btn-lg col-12" disabled={btnDisabledRecoveryAccount}>
                                    Enviar
                                    {btnDisabledRecoveryAccount && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                </Button>
                            </div>

                        </Form>
                    </div>
                    }
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