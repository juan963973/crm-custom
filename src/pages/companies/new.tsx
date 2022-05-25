import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CreateOrUpdateCompanyModel } from "../../models/Company";
import { injectStyle } from "react-toastify/dist/inject-style";
import FormCompany from "components/company/forms";
import HeaderForms from "components/_common/header-forms";
import { toast, ToastContainer } from "react-toastify";

function New() {
  const [companyData, setCompanyData] = useState<CreateOrUpdateCompanyModel>({} as CreateOrUpdateCompanyModel);

  const [validated, setValidated] = useState(false);

  if (typeof window !== "undefined") {
    injectStyle();
  }

  const handleChange = (e: any, name: string | null = null) => {

    if(!name){
      let name = e.target.name;
      let value = e.target.value;
      setCompanyData({...companyData,[name]:value})
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
    setValidated(true)
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
        <FormCompany 
          handleChange={handleChange} 
          companyData = {companyData}
        />
      </Form>
    </>
  );
}

export default New;
