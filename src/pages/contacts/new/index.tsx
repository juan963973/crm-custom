import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Forms from "components/contact/forms";
import { injectStyle } from "react-toastify/dist/inject-style";
import { CreateContactModel } from "../../../models/Contact";
import { create, refenceField } from "services/contactService";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import HeaderForms from "components/_common/header-forms";
import { thousandsFormat } from "utils";

function New({ module, query }: any) {
  // const [contactsData, setContactsData] = useState<CreateContactModel>({
  //   callDirectionId: 1,
  //   contactId: null,
  //   companyId: null,
  // } as CreateContactModel);

  const [contactsData, setContactsData] = useState<CreateContactModel>({ clientType: 'PersonaFisica' } as CreateContactModel);
  
  const [dataReference, setDataReference] = useState({
    documentTypeName: "",
    email: "",
    clientCode: "",
    documentNumber: "",
    phone: "",
    mobile: "",
    officialId: null,
  });

  // const [dataPromoter, setDataPromoter] = useState({
  //   email: "",
  //   documentNumber: "",
  //   mobile: "",
  // });

  const [endpointCascade, setEndpointCascade] = useState({
    cityId: "Search/city"
  });

  const [validated, setValidated] = useState(false);
  const [customerValid, setCustomerValid] = useState(false);
  const [originValid, setOriginValid] = useState(false);
  const [statusValid, setStatusValid] = useState(false);
  const [requiredType, setRequiredType] = useState(false);
  const [requiredSubType, setRequiredSubType] = useState(false);
  const [requiredResolverArea, setRequiredResolverArea] = useState(false);
  const [requiredTipifications, setRequiredTipifications] = useState(false);
  const [sendCorrespondence, setSendCorrespondence] = useState(true);
  const [clientCode, setClientCode] = useState(false);
  
  var arrayData:any;

  const router = useRouter();
    

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
          setSendCorrespondence(!value)
          break;
        case "select-one":
          if (Number.isNaN(e.target.value)) {
            value = null;
            break;
          }
          // value = Number(e.target.value);
          value = e.target.value;
          console.log('selectone::', value)
          break;
        default:
          value = e.target.value;
          break;
      }

      if (key == "contactId" || key == "companyId" || key == "promoterId") {
        await completeField(key, value);
      } else {
        if (key == "departmentId") {
          page = `Search/city?code=${value}`;
          setEndpointCascade({ ...endpointCascade, cityId: page });
        }

        if (key == "subtypeId") {
          page = `Search/typifications?${key}=${value}`;
          setEndpointCascade({ ...endpointCascade, typificationId: page });
        }

        if(key == "clientCode") {
          if(value.length > 0) {
            setClientCode(true)
          } else {
            setClientCode(false)
          }
        }

        if(key == "currentSalary") {
            let nuevo = e.target.value;
            nuevo = nuevo.replaceAll(".", "");
            e.target.value = thousandsFormat(nuevo)
            value = nuevo
        }

        setContactsData({ ...contactsData, [key]: value });
      }
      return;
    } else {
      if(query.data){
        const {id, view} = JSON.parse(query.data);
        let value = {...contactsData,[view]:id}
        arrayData = {...arrayData,...value};
        if(view == "contactId"){
          const res: any = await refenceField("Info/contacts/contact-info", id);
          setDataReference(res);
          arrayData = {...arrayData,businessOfficerId: res.officialId}
        }else if(view=="companyId"){
          const res: any = await refenceField("Info/contacts/company-info", id);
          setDataReference(res);
          arrayData = {...arrayData,businessOfficerId: res.officialId}
        }
      }
      arrayData = {...arrayData,[name]: e };
      setContactsData({ ...contactsData, ...arrayData});      
      return;
    }
  };

  const completeField = async (key: any, value: any) => {
    let page;

    switch (key) {
      case "companyId":
        page = "Info/contacts/company-info";
        if (value !== null) {
          try {
            const res: any = await refenceField(page, value);
            setDataReference(res);
            setContactsData({
              ...contactsData,
              businessOfficerId: res.officialId,
              [key]: value,
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          setContactsData({
            ...contactsData,
            businessOfficerId: null,
            [key]: value,
          });
          // setDataReference({
          //   documentTypeName: "",
          //   email: "",
          //   clientCode: "",
          //   documentNumber: "",
          //   branchName: null,
          //   phone: "",
          //   mobile: "",
          //   officialId: null,
          // });
        }

        break;
      case "contactId":
        page = "Info/contacts/contact-info";
        if (value !== null) {
          try {
            const res: any = await refenceField(page, value);
            setDataReference(res);
            setContactsData({
              ...contactsData,
              businessOfficerId: res.officialId,
              [key]: value,
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          setContactsData({
            ...contactsData,
            businessOfficerId: null,
            [key]: value,
          });
          // setDataReference({
          //   documentTypeName: "",
          //   email: "",
          //   clientCode: "",
          //   documentNumber: "",
          //   branchName: null,
          //   phone: "",
          //   mobile: "",
          //   officialId: null,
          // });
        }
        break;
      case "promoterId":
        page = "Info/contacts/contact-info";
        try {
          const res: any = await refenceField(page, value);
          setDataPromoter(res);
          setContactsData({ ...contactsData, [key]: value });
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
    if (form.checkValidity() === false) {
      console.log("Falta Validar");
    } else {
      let page = "Contacts";
      let validation = true;
      try {
        // if (contactsData.companyId == null && contactsData.contactId == null) {
        //   validation = false;
        //   setCustomerValid(true);
        // } else {
        //   setCustomerValid(false);
        // }

        // if (!contactsData.typeId) {
        //   setRequiredType(true);
        //   validation = false;
        // } else {
        //   setRequiredType(false);
        // }

        // if (!contactsData.subtypeId) {
        //   setRequiredSubType(true);
        //   validation = false;
        // } else {
        //   setRequiredSubType(false);
        // }

        // if (!contactsData.typificationId) {
        //   setRequiredTipifications(true);
        //   validation = false;
        // } else {
        //   setRequiredTipifications(false);
        // }

        // if (!contactsData.resolutionAreaIds) {
        //   setRequiredResolverArea(true);
        //   validation = false;
        // } else {
        //   setRequiredResolverArea(false);
        // }

        // if (!contactsData.contactStatusId) {
        //   setStatusValid(true);
        //   validation = false;
        // } else {
        //   setStatusValid(false);
        // }

        // if (!contactsData.originId) {
        //   setOriginValid(true);
        //   validation = false;
        // } else {
        //   setOriginValid(false);
        // }

        if (validation) {
          await create(page, contactsData);
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
            router.push(`/contacts`);
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
    sendCorrespondence,
    clientCode,
    form: 'new'
  };

  return (
    <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div
            className="shadow-sm p-3 mb-5 bg-white rounded container-fluid"
            style={{ zIndex: 9, marginTop: "-71px", position: "fixed" }}
          >
            <HeaderForms title="Crear Contacto" handleClose={handleClose} />
          </div>
          <ToastContainer />
          <Forms
            handleChange={handleChange}
            reference={dataReference}
            contactData={contactsData}
            paramsRequired={paramsRequired}
            cascade={endpointCascade}
            dataDate = {contactsData.dateOfBirth}
          />
        </Form>
    </>
  );
}

export default New;

export function getServerSideProps(req: any, res: any) {
  const module = req.resolvedUrl;
  const query = req.query
  return { props: { module, query } };
}
