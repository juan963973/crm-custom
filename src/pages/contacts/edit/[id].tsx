import Forms from "components/contact/forms";
import HeaderForms from "components/_common/header-forms";
import _ from "lodash";
import { CreateContactModel } from "models/Contact";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { create, refenceField, saveUpdate, update } from "services/contactService";

function EditContact({ id, uri }: any) {
  // const [contactsData, setContactsData] = useState<CreateContactModel>({
  //   callDirectionId: 1,
  //   businessOfficerId: 1
  // } as CreateContactModel);

  const [contactsData, setContactsData] = useState<CreateContactModel>({} as CreateContactModel);
  
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


  const router = useRouter();

  if (typeof window !== "undefined") {
    injectStyle();
  }

  useEffect(() => {
    let page = _.startCase(uri);
    update(page, id)
      .then((response: any) => {
        if (response.companyId !== null) {
          let key = "companyId";
          let value = response.companyId;
          completeField(key, value);
        } else if (response.contactId !== null) {
          let key = "contactId";
          let value = response.contactId;
          completeField(key, value);
        }
        if (response.promoterId !== null) {
          let key = "promoterId";
          let value = response.promoterId;
          completeField(key, value);
        }

        if (response.departmentId) {
          let page = `Search/city?code=${response.departmentId}`;
          setEndpointCascade({ ...endpointCascade, cityId: page });
        }

        setContactsData(response);
      })

     
      
      .catch((e: any) => console.log(e));
  }, []);

  const handleChange = (e: any, name: string | null = null) => {
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
        completeField(key, value);
      }

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

      setContactsData({ ...contactsData, [key]: value });
      return;
    } else {
      setContactsData({ ...contactsData, [name]: e });
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
            //setContactsData({ ...contactsData, businessOfficerId: res.officialId });
          } catch (error) {
            console.log(error);
          }
        }

        break;
      case "contactId":
        page = "Info/cases/contact-info";
        if (value !== null) {
          try {
            const res: any = await refenceField(page, value);
            setDataReference(res);
            //setContactsData({ ...contactsData, businessOfficerId: res.officialId });
          } catch (error) {
            console.log(error);
          }
        }
        break;
      case "promoterId":
        page = "Info/cases/contact-info";
        try {
          const res: any = await refenceField(page, value);
          setDataPromoter(res);
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
      let page = `Contacts/${id}`;
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

        // if (!contactsData.resolutionAreaIds) {
        //   setRequiredResolverArea(true);
        //   validation = false;
        // } else {
        //   setRequiredResolverArea(false);
        // }

        if (validation) {
          await saveUpdate(page, contactsData);
          toast.success("Se ha modificado con exito!", {
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

  const params = {
    setContactsData,
    contactsData,
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
    form: 'edit'
  };

  const dateFormat = (date:any)=>{
    let dateStr = String(date).split('/');
    if(dateStr[0].length==2){
      return `${dateStr[2]}-${dateStr[1]}-${dateStr[0]}`;
    }else{
      return date;
    }
  }

  return (
    <>
      <Form
        noValidate
        validated={validated}
        style={{ marginTop: "58px" }}
        onSubmit={handleSubmit}
      >
        <div
          className="shadow-sm p-3 mb-5 bg-white rounded container-fluid"
          style={{ zIndex: 9, marginTop: "-71px", position: "fixed" }}
        >
          <HeaderForms title="Editar Caso" handleClose={handleClose} />
          <ToastContainer />
        </div>
        <Forms
          handleChange={handleChange}
          reference={dataReference}
          contactData={contactsData}
          params={params}
          paramsRequired={paramsRequired}
          cascade={endpointCascade}
          dataDate = {dateFormat(contactsData.dateOfBirth)}
        />
      </Form>
    </>
  );
}

export default EditContact;

export async function getServerSideProps(req: any, res: any) {
  const {
    query: { id },
    resolvedUrl,
  } = req;
  const uri = resolvedUrl.split("/")[1];
  return {
    props: { id, uri },
  };
}
