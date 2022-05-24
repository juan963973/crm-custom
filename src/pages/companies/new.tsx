import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { CreateCaseModel } from "../../models/Case";
import { create, refenceField } from "../../services/caseService";
import FormCompany from "components/company/forms";
import HeaderForms from "components/_common/header-forms";
import { toast, ToastContainer } from "react-toastify";

function New() {
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
  });

  const [dataPromoter, setDataPromoter] = useState({
    email: "",
    documentNumber: "",
    mobile: "",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e: any, name: string | null = null) => {
    if (!name) {
      let key = e.target.name;
      let value;
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
      if (key == "companyId" || key == "contactId" || key == "promoterId") {
        completeField(key, value);
      }
      setCasesData({ ...casesData, [key]: value });
      return;
    } else {
      setCasesData({ ...casesData, [name]: e });
      return;
    }
  };

  const completeField = async (key: any, value: any) => {
    let page;
    switch (key) {
      case "companyId":
        page = "Info/cases/contact-info";
        if (value !== null) {
          try {
            const res: any = await refenceField(page, value);
            setDataReference(res);
          } catch (error) {
            console.log(error);
          }
        }

        break;
      case "contactId":
        page = "Info/cases/company-info";
        if (value !== null) {
          try {
            const res: any = await refenceField(page, value);
            setDataReference(res);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("falta validar")
    } else {
      toast.success("Se ha guardado con exito!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleClose = () => {
    window.history.back();
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div
          className="shadow-sm p-3 mb-5 bg-white rounded container-fluid"
          style={{ zIndex: 9, marginTop: "-71px", position: "fixed" }}
        >
          <HeaderForms title="Crear Empresa" handleClose={handleClose} />
        </div>
        <ToastContainer />
        <FormCompany />
      </Form>
    </>
  );
}

export default New;
