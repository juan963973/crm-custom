import Forms from "components/case/forms";
import HeaderForms from "components/_common/header-forms";
import _ from "lodash";
import { CreateCaseModel } from "models/Case";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { create, refenceField, update } from "services/caseService";

function EditCase({ id, uri }: any) {
  const [casesData, setCasesData] = useState<CreateCaseModel>({
    callDirectionId: 1,
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
        setCasesData(response);
      })
      .catch((e: any) => console.log(e));
  }, []);

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
      if (key == "contactId" || key == "companyId" || key == "promoterId") {
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
        page = "Info/cases/contact-info";
        if (value !== null) {
          try {
            const res: any = await refenceField(page, value);
            console.log(res);
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

  const handleClose = () =>{
    window.history.back()
  }

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;

    event.preventDefault();

    // setCasesData({ callDirectionId: 1 } as CreateCaseModel);
    // setDataReference({
    //   documentTypeName: "",
    //   email: "",
    //   clientCode: "",
    //   documentNumber: "",
    //   branchName: null,
    //   phone: "",
    //   mobile: "",
    // });
    // setDataPromoter({ email: "", documentNumber: "", mobile: "" });

    if (form.checkValidity() === false) {
      event.preventDefault();
    } else {
      const page = "Cases";
      try {
        // await create(page, casesData);
        toast.success("Se ha modificado con exito!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
      }
    }
    setValidated(true);
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        style={{ marginTop: "58px" }}
        onSubmit={handleSubmit}
      >
        <div className="shadow-sm p-3 mb-5 bg-white rounded container-fluid" style={{zIndex: 9999, marginTop: "-71px", position: "fixed" }}>
          <HeaderForms title="Editar Caso" handleClose={handleClose} />
          <ToastContainer />
        </div>
        <Forms
          handleChange={handleChange}
          reference={dataReference}
          dataPromoter={dataPromoter}
          caseData={casesData}
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
