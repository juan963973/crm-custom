import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import Forms from "components/case/forms";
import {injectStyle} from "react-toastify/dist/inject-style";
import {CreateCaseModel} from "../../../models/Case";
import {create, refenceField} from "../../../services/caseService";
import {useRouter} from "next/router";
import {toast, ToastContainer} from "react-toastify";
import HeaderForms from "components/_common/header-forms";

function New({module, query}: any) {
    const [casesData, setCasesData] = useState<CreateCaseModel>({
        callDirectionId: 1,
        contactId: null,
        companyId: null,
    } as CreateCaseModel);

    const [dataReference, setDataReference] = useState({
        documentTypeName: "",
        email: "",
        clientCode: "",
        documentNumber: "",
        branchName: null,
        phone: "",
        mobile: "",
        officialId: null,
    });

    const [dataPromoter, setDataPromoter] = useState({
        email: "",
        documentNumber: "",
        mobile: "",
    });

    const [endpointCascade, setEndpointCascade] = useState({
        subtypeId: "Search/subtypes",
        typificationId: "Search/typifications",
    });

    const [validated, setValidated] = useState(false);
    const [customerValid, setCustomerValid] = useState(false);
    const [originValid, setOriginValid] = useState(false);
    const [statusValid, setStatusValid] = useState(false);
    const [requiredType, setRequiredType] = useState(false);
    const [requiredSubType, setRequiredSubType] = useState(false);
    const [requiredResolverArea, setRequiredResolverArea] = useState(false);
    const [requiredTipifications, setRequiredTipifications] = useState(false);
    let arrayData: any;

    const router = useRouter();

    useEffect(   () => {
        if (query.data) {
            const {id, view} =JSON.parse(query.data)
            handleChange(id, view)
        }
    },[])
    
    if (typeof window !== "undefined") {
        injectStyle();
    }

    const handleChange = async (e: any, name: string | null = null) => {
        if (!name) {
            let key = e.target.name;
            let value;
            let page = "";

            switch (e.target.type) {
                case "checkbox":
                    value = e.target.checked;
                    break;
                case "select-one":
                    if (isNaN(e.target.value)) {
                        value = null;
                        break;
                    }
                    value = Number(e.target.value);
                    break;
                default:
                    value = e.target.value;
                    break;
            }


            if (key == "typeId") {
                page = `Search/subtypes?${key}=${value}`;
                setEndpointCascade({...endpointCascade, subtypeId: page});
            }

            if (key == "subtypeId") {
                page = `Search/typifications?${key}=${value}`;
                setEndpointCascade({...endpointCascade, typificationId: page});
            }

            setCasesData({...casesData, [key]: value});

            return;
        } else {
            if (name == "contactId" || name == "companyId" || name == "promoterId") {
                await completeField(name, e);
                
                if (query.data) {
                    const {id, view} = JSON.parse(query.data);
                    let value = {...casesData, [view]: id}
                    arrayData = {...arrayData, ...value};
                    if (view == "contactId") {
                        const res: any = await refenceField("Info/cases/contact-info", id);
                        setDataReference(res);
                        arrayData = {...arrayData, businessOfficerId: res.officialId}
                    } else if (view == "companyId") {
                        const res: any = await refenceField("Info/cases/company-info", id);
                        setDataReference(res);
                        arrayData = {...arrayData, businessOfficerId: res.officialId}
                    }
                }
            }
            arrayData = {...arrayData, [name]: e};
            setCasesData({...casesData, ...arrayData});
            return;
        }
    };

    const completeField = async (key: any, value: any) => {
        let page;

        switch (key) {
            case "companyId":
                page = "Info/cases/company-info";
                if (value !== null) {
                    try {
                        const res: any = await refenceField(page, value);
                        setDataReference(res);
                        arrayData = {...arrayData, businessOfficerId: res.officialId}
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    arrayData = {...arrayData, businessOfficerId: null}

                    setDataReference({
                        documentTypeName: "",
                        email: "",
                        clientCode: "",
                        documentNumber: "",
                        branchName: null,
                        phone: "",
                        mobile: "",
                        officialId: null,
                    });
                }

                break;
            case "contactId":
                page = "Info/cases/contact-info";
                if (value !== null) {
                    try {
                        const res: any = await refenceField(page, value);
                        setDataReference(res);
                        arrayData = {...arrayData, businessOfficerId: res.officialId}
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    arrayData = {...arrayData, businessOfficerId: null}

                    setDataReference({
                        documentTypeName: "",
                        email: "",
                        clientCode: "",
                        documentNumber: "",
                        branchName: null,
                        phone: "",
                        mobile: "",
                        officialId: null,
                    });
                }
                break;
            case "promoterId":
                page = "Info/cases/contact-info";
                try {
                    const res: any = await refenceField(page, value);
                    setDataPromoter(res);
                    setCasesData({...casesData, [key]: value});
                } catch (error) {
                    console.log(error);
                }
                break;
            default:
                break;
        }
    };

    const handleClose = () => {
        window.history.back();
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const form = e.currentTarget;
        console.log(form);
        if (form.checkValidity() === false) {
            console.log("Falta Validar");
        } else {
            let page = "Cases";
            let validation = true;
            try {
                if (casesData.companyId == null && casesData.contactId == null) {
                    validation = false;
                    setCustomerValid(true);
                } else {
                    setCustomerValid(false);
                }

                if (!casesData.typeId) {
                    setRequiredType(true);
                    validation = false;
                } else {
                    setRequiredType(false);
                }

                if (!casesData.subtypeId) {
                    setRequiredSubType(true);
                    validation = false;
                } else {
                    setRequiredSubType(false);
                }

                if (!casesData.typificationId) {
                    setRequiredTipifications(true);
                    validation = false;
                } else {
                    setRequiredTipifications(false);
                }

                if (!casesData.resolutionAreaIds) {
                    setRequiredResolverArea(true);
                    validation = false;
                } else {
                    setRequiredResolverArea(false);
                }

                if (!casesData.caseStatusId) {
                    setStatusValid(true);
                    validation = false;
                } else {
                    setStatusValid(false);
                }

                if (!casesData.originId) {
                    setOriginValid(true);
                    validation = false;
                } else {
                    setOriginValid(false);
                }

                if (validation) {
                    await create(page, casesData);
                    toast.success("Se ha guardado con exito!", {
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
                }
            } catch (error) {
                console.log(error);
            }
        }
        setValidated(true);
    };

    const paramsRequired = {
        requiredType,
        requiredSubType,
        requiredTipifications,
        customerValid,
        requiredResolverArea,
        originValid,
        statusValid,
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div
                    className="shadow-sm p-3 mb-5 bg-white rounded container-fluid"
                    style={{zIndex: 9, marginTop: "-71px", position: "fixed"}}
                >
                    <HeaderForms title="Crear Caso" handleClose={handleClose}/>
                </div>
                <ToastContainer/>
                <Forms
                    handleChange={handleChange}
                    reference={dataReference}
                    dataPromoter={dataPromoter}
                    caseData={casesData}
                    paramsRequired={paramsRequired}
                    cascade={endpointCascade}
                />
            </Form>
        </>
    );
}

export default New;

export function getServerSideProps(req: any, res: any) {
    const module = req.resolvedUrl;
    const query = req.query
    return {props: {module, query}};
}
