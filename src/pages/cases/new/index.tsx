import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Forms from "components/case/forms";
import { injectStyle } from "react-toastify/dist/inject-style";
import { CreateCaseModel } from "../../../models/Case";
import { create, refenceField } from "../../../services/caseService";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

function New({ module }: any) {
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
  const router = useRouter();

  if (typeof window !== "undefined") {
    injectStyle();
  }

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

  const changeStatus = (name:any, value:any) =>{
    setCasesData({ ...casesData, [name]: value });
  }


  const handleClose = () =>{
    window.history.back()
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("Falta Validar");
    } else {
      let page = "Cases";
      try {
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
          router.push(`/cases`)
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Form
        noValidate
        validated={validated}
        style={{ marginTop: "58px" }}
        onSubmit={handleSubmit}
      >
        <Container className="shadow-sm p-3 mb-5 bg-white rounded mt-2">
          <Row className="justify-content-end">
            <Col sm={2}>
              {" "}
              <h4>Crear caso</h4>{" "}
            </Col>
            {/* <Col sm={2}>
              <Form.Select>
                <option value="1">Diseños</option>
                <option value="2">Standard</option>
                <option value="3">Test</option>
              </Form.Select>
            </Col> */}
            <Col align="end">
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>{" "}
              <Button variant="secondary">Guardar y nuevo</Button>{" "}
              <Button variant="primary" type="submit">
                Guardar
              </Button>{" "}
            </Col>
          </Row>
          <ToastContainer/>
        </Container>

        <Forms
          handleChange={handleChange}
          reference={dataReference}
          dataPromoter={dataPromoter}
          caseData={casesData}
          changeStatus={changeStatus}
        />
      </Form>
    </>
  );
}

export default New;

export function getServerSideProps(req: any, res: any) {
  const module = req.resolvedUrl;
  return { props: { module } };
}
