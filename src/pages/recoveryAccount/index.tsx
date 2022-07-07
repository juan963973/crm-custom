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

export default function RecoveryAccont() {
    const [body, setBody] = useState({ userName: '', password: '' })
    const router = useRouter();
    const [textButton, setTextButton] = useState('Actualizar contraseña')
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [btnPasswordDisabled, setBtnPasswordDisabled] = useState(false)
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

    function handleSubmitRecoveryPassword (event:any) {
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
            setTextButton('Actualizar contraseña');
            setBtnDisabled(false);
            return
        }

        toast.success('Contraseña actualizada', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTextButton('Actualizar contraseña');
        setBtnDisabled(false);
    }
  
    return (
        <section className="vh-100" style={{backgroundImage: `url('/fondo-login.svg')`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center h-100">
                
                    
                    <div className="col-md-8 col-lg-6 col-xl-4" style={{padding: "30px", background: "white", borderRadius: "2px 0 0 2px", boxShadow:"0px 2px 30px #ccc6", borderRight: "2px solid #f1f1f1" }}>
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

                            <div> <h4>Recuperación de Cuenta</h4> </div>

                            <div> <p>Ingrese su nueva contraseña</p> </div>

                            <div className="form-outline mb-4">
                                <Form.Control
                                    autoFocus
                                    type='password'
                                    name='userName'
                                    placeholder='Nueva contraseña'
                                    value={body.userName}
                                    onChange={inputChange}
                                />
                            </div>

                            <div className="form-outline mb-3">
                                <Form.Control
                                    type='password'
                                    name='password'
                                    placeholder='Vuelva a ingresar la contraseña'
                                    value={body.password}
                                    onChange={inputChange}
                                    
                                />
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Button type="submit" className="btn btn-primary btn-lg col-12" disabled={btnDisabled}>
                                    {textButton}
                                    {btnDisabled && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                </Button>
                            </div>

                        </Form>
                    </div>
                    
                </div>
            </div>
        </section>
    );
  }

  RecoveryAccont.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            {page}
        </>
    )
  }