import Forms from "components/case/forms";
import HeaderForms from "components/_common/header-forms";
import _ from "lodash";
import {CaseDetailModel, CreateCaseModel} from "models/Case";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import {create, detail, refenceField, saveUpdate, update} from "services/caseService";


function EditCase({ id, uri }: any) {
  const [casesData, setCasesData] = useState<CreateCaseModel>({
    callDirectionId: 1,
    businessOfficerId: 1,
    subject: ""
  } as CreateCaseModel);

  const [cases, setCases] = useState<CaseDetailModel[]>([] as CaseDetailModel[])
  useEffect(() => {
    const page = 'cases'

    detail(page, id)

        .then(data => {

          setCases(data)

        })

        .catch(e => console.log(e));

  }, [])
  // console.log('cases', cases)

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
  const router = useRouter();
  let arrayData: any;

  if (typeof window !== "undefined") {
    injectStyle();
  }

  useEffect(() => {
    let page = _.startCase(uri);
    update(page, id)
      .then((response: any) => {
        console.log("response::", response);
        
        if (response.companyId !== null && response.contactId !== null) {
          let key = "companyIdContactId";
          let value = response.companyId;
          completeField(key, value, response.contactId);

          // key = "contactId";
          // value = response.contactId;
          // completeField(key, value);
        } else if (response.companyId === null && response.contactId !== null) {
          let key = "contactId";
          let value = response.contactId;
          completeField(key, value);
        } else if (response.companyId !== null && response.contactId === null) {
          let key = "companyId";
          let value = response.companyId;
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

  if(!casesData){

    return <p>loading...</p>
  }

  const handleChange = async (e: any, name: string | null = null) => {
    console.log("name::", name);
    
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
      let page = "";
      if (key == "typeId") {
        page = `Search/subtypes?${key}=${value}`;
        setEndpointCascade({ ...endpointCascade, subtypeId: page });
      }
      if (key == "subtypeId") {
        page = `Search/typifications?${key}=${value}`;
        setEndpointCascade({ ...endpointCascade, typificationId: page });
      }
      setCasesData({ ...casesData, [key]: value });
      return;
    } else {

      if (name == "contactId" || name == "companyId" || name == "promoterId") {
            if (name == "contactId") {
                const res: any = await refenceField("Info/cases/contact-info", e);
                console.log("rescontactId::", res);
                setDataReference(res);
            } else if (name == "companyId") {
                const res: any = await refenceField("Info/cases/company-info", e);
                console.log("rescompanyId::", res);
                setDataReference(res);
            }
      }
      arrayData = {...arrayData, [name]: e};
      setCasesData({...casesData, ...arrayData});
      return;

    }
  };

  const completeField = async (key: any, value: any, contactId:any = null) => {
    // const completeField = (key: any, value: any) => {
    let page;
    switch (key) {
      case "companyId":
        page = "Info/cases/company-info";
        if (value !== null) {
          try {
            const res: any = await refenceField(page, value);
            setDataReference(res);
            //setCasesData({ ...casesData, businessOfficerId: res.officialId });
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
            //setCasesData({ ...casesData, businessOfficerId: res.officialId });
          } catch (error) {
            console.log(error);
          }
        }
        break;
      case "companyIdContactId":
        let pageCompany = "Info/cases/company-info";
        let pageContact = "Info/cases/contact-info";
        if (value !== null) {
          try {
            let companyRes: any = await refenceField(pageCompany, value);
            console.log('companyRes::', companyRes)
            let contactRes:any = await refenceField(pageContact, contactId);
            console.log('contactRes::', contactRes)
            contactRes.name = companyRes.name
            console.log("contactRes::", contactRes)
            setDataReference(contactRes);
            //setCasesData({ ...casesData, businessOfficerId: res.officialId });
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
    console.log(form);
    if (form.checkValidity() === false) {
      console.log("Falta Validar");
    } else {
      let page = `Cases/${id}`;

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

        if (!casesData.resolutionAreaIds) {
          setRequiredResolverArea(true);
          validation = false;
        } else {
          setRequiredResolverArea(false);
        }

        if (validation) {
          await saveUpdate(page, casesData);
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
            router.push(`/cases`);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setValidated(true);
  };

  const params = {
    setCasesData,
    casesData,
  };

  const paramsRequired = {
    requiredType,
    requiredSubType,
    requiredTipifications,
    customerValid,
    requiredResolverArea,
    originValid,
    statusValid
  };

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
        </div>
        <ToastContainer />
        <Forms
          handleChange={handleChange}
          reference={dataReference}
          dataPromoter={dataPromoter}
          caseData={casesData}
          cases={cases}
          params={params}
          paramsRequired={paramsRequired}
          cascade={endpointCascade}
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
