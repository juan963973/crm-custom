import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { injectStyle } from "react-toastify/dist/inject-style";
import FormCompany from "components/company/forms";
import HeaderForms from "components/_common/header-forms";
import { toast, ToastContainer } from "react-toastify";
import { update } from "services/caseService";
import { CreateOrUpdateCompanyModel } from "models/Company";
import _ from "lodash";
import { updateCompany } from "services/companyService";
import { useRouter } from "next/router";

function EditCase({ id, uri }: any) {
  const [companyData, setCompanyData] = useState<CreateOrUpdateCompanyModel>(
    {} as CreateOrUpdateCompanyModel
  );

  const [validated, setValidated] = useState(false);
  const [endpointCascade, setEndpointCascade] = useState({});
  const router = useRouter();

  useEffect(() => {
    let page = _.startCase(uri);
    update(page, id)
      .then((response: any) => {
        setCompanyData(response);
      })
      .catch((e: any) => console.log(e));
  }, []);

  if (typeof window !== "undefined") {
    injectStyle();
  }

  const handleChange = (e: any, name: string | null = null) => {
    if (e.target) {
      let nameData = e.target.name;
      let value = e.target.value;
      if (nameData == "departmentId") {
        let page = `Search/city?code=${value}`;

        setEndpointCascade({ ...endpointCascade, city: page });
      }

      setCompanyData({ ...companyData, [nameData]: value });
    } else {
      setCompanyData({ ...companyData, [name]: e });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("falta validar");
    } else {
      try {
        let page = `Companies/${id}`;
        await updateCompany(page, companyData);

        toast.success("Se ha Modificado con exito!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          router.push(`/companies`);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
    setValidated(true);
  };

  const handleClose = () => {
    window.history.back();
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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div
          className="shadow-sm p-3 mb-5 bg-white rounded container-fluid"
          style={{ zIndex: 9, marginTop: "-71px", position: "fixed" }}
        >
          <HeaderForms title="Crear Empresa" handleClose={handleClose} />
        </div>
        <ToastContainer />
        <FormCompany
          handleChange={handleChange}
          companyData={companyData}
          cascade={endpointCascade}
          dataDate = {dateFormat(companyData.foundation)}
        />
      </Form>
    </>
  );
}

export default EditCase;

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
