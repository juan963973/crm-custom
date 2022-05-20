import { Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import MultipleSelect from "components/_common/multiple-select";
import "rsuite/dist/rsuite.min.css";
import MultipleArray from "components/_common/array-select";
import { CustomAsyncPaginate } from "components/_common/auto-scroll";
import { refenceField } from "services/contactService";

const Forms = ({
  handleChange,
  reference,
  dataPromoter,
  contactData,
  paramsRequired,
  cascade,
}: any) => {
  const styles = {
    disable: {
      background: "white",
    },
    required: {
      borderLeft: "4px solid #E74C3C",
    },
    complete: {
      borderLeftColor: "gray",
    },
    multiple: {
      required: {
        borderLeft: "4px solid #E74C3C",
        width: "100%",
      },
      complete: {
        borderLeftColor: "gray",
        width: "100%",
      },
      size: {
        width: "100%",
      },
    },
  };

  const valueField = async (id: any, label: any) => {

    if(!id)
      return;

    let page;
    let valueData;
    switch (label) {
      case "contactId":
        page = "Info/contacts/contact-info";
        valueData = await refenceField(page, id);
        return valueData
        break;
      case "companyId":
        page = "Info/contacts/company-info";
        valueData = await refenceField(page, id);
        return valueData
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-fluid" style={{ marginTop: "126px" }}>
      <div style={{ paddingLeft: "25px" }}>
        <Row className="mt-100" style={{ marginBottom: 20 }}>
          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS BASICOS</h4>{" "}
            </Col>
          </Row>
          <Row align="end" className="mt-1">
            <Col>Tipo de Documento</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
              <Form.Control.Feedback type="invalid">
                Tipo no puede estar vacío
              </Form.Control.Feedback>
            </Col>

            <Col>Nacionalidad</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
              <Form.Control.Feedback type="invalid">
                Tipo no puede estar vacío
              </Form.Control.Feedback>
            </Col>
              {/* <Col>Nombre de Empresa</Col>
              <Col sm={4} align="start">
                <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={contactData?.contactId !== null}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  value={async () => {
                    return await valueField(contactData.companyId, "companyId");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
              </Col> */}
          </Row>
        </Row>
        <Row>
          <Row align="end" style={{ marginBottom: 10 }}>
            <Col>Nro Documento</Col>
            <Col sm={4} align="start">
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="subject"
                  onChange={(e) => handleChange(e)}
                  defaultValue={contactData.subject}
                  style={!contactData.subject ? styles.required : styles.complete}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Asunto no puede estar vacío
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col>Genero Contacto</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
              <Form.Control.Feedback type="invalid">
                Tipo no puede estar vacío
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 10 }}>
              <Col>Nombre</Col>
              <Col sm={4} align="start">
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="subject"
                  onChange={(e) => handleChange(e)}
                  defaultValue={contactData.subject}
                  style={!contactData.subject ? styles.required : styles.complete}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Asunto no puede estar vacío
                </Form.Control.Feedback>
              </InputGroup>
              </Col>

              <Col>Fecha de Nacimiento</Col>
              <Col sm={4}>
                <InputGroup className="mb-2">
                  <FormControl
                    type="date"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="email"
                    defaultValue={reference.email}
                  />
                </InputGroup>
              </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 10 }}>
            <Col>Apellidos</Col>
            <Col sm={4} align="start">
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="subject"
                  onChange={(e) => handleChange(e)}
                  defaultValue={contactData.subject}
                  style={!contactData.subject ? styles.required : styles.complete}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Asunto no puede estar vacío
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col>Tipo de Cartera</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
              <Form.Control.Feedback type="invalid">
                Tipo no puede estar vacío
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 10 }}>
            <Col>Estado Civil</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
              <Form.Control.Feedback type="invalid">
                Tipo no puede estar vacío
              </Form.Control.Feedback>
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>
        </Row>

        <Row className="mb-200" style={{ marginBottom: 30 }}>
          <Row>
            <Col style={{ marginBottom: 10 }}>
              {" "}
              <h4>DATOS DEL CLIENTE</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Codigo Cliente</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>

            <Col>Es Cliente?</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
              <Form.Control.Feedback type="invalid">
                Tipo no puede estar vacío
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Estado</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                  endpoint={"Search/types"}
                  onChange={handleChange}
                  keyFilter={"typeId"}
                  value={contactData.typeId}
                  paramsRequired={paramsRequired.requiredType}
                />
                <Form.Control.Feedback type="invalid">
                  Tipo no puede estar vacío
                </Form.Control.Feedback>
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Tipo Contacto</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                  endpoint={"Search/types"}
                  onChange={handleChange}
                  keyFilter={"typeId"}
                  value={contactData.typeId}
                  paramsRequired={paramsRequired.requiredType}
                />
                <Form.Control.Feedback type="invalid">
                  Tipo no puede estar vacío
                </Form.Control.Feedback>
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Tipo Cliente</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                  endpoint={"Search/types"}
                  onChange={handleChange}
                  keyFilter={"typeId"}
                  value={contactData.typeId}
                  paramsRequired={paramsRequired.requiredType}
                />
                <Form.Control.Feedback type="invalid">
                  Tipo no puede estar vacío
                </Form.Control.Feedback>
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>

        </Row>

        <Row className="mb-200" style={{ marginBottom: 30 }}>
          <Row>
            <Col style={{ marginBottom: 10 }}>
              {" "}
              <h4>DATOS DE CONTACTO</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Correo electrónico</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>

            <Col>Móvil</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Correo electrónico secundario</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>

            <Col>Telefono Fijo</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col></Col>
            <Col sm={4}>
              
            </Col>

            <Col>Teléfono</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>
          </Row>

        </Row>

        <Row className="mb-200" style={{ marginBottom: 30 }}>
          <Row>
            <Col style={{ marginBottom: 10 }}>
              {" "}
              <h4>DIRECCION DEL CONTACTO</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Dirección</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>

            <Col>Departamento Contacto</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Nro Domicilio</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>

            <Col>Ciudad</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Referencia</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>

            <Col>Barrio</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Enviar correspondencia a esta dirección?</Col>
            <Col sm={4} align="start">
              <input
                  type="checkbox"
                  className="input-group-text"
                  name="requestExtension"
                  onChange={(e) => handleChange(e)}
                  checked={
                    contactData.requestExtension ? contactData.requestExtension : false
                  }
              />
            </Col>

            <Col></Col>
            <Col sm={4}>
              
            </Col>
          </Row>

        </Row>

        <Row className="mb-200" style={{ marginBottom: 30 }}>
          <Row>
            <Col style={{ marginBottom: 10 }}>
              {" "}
              <h4>DATOS LABORALES</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Lugar de Trabajo</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>

            <Col>Teléfono Laboral</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Salario Actual</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>

            <Col>Desea registrar los datos de su asistente?</Col>
            <Col sm={4} align="start">
              <input
                  type="checkbox"
                  className="input-group-text"
                  name="requestExtension"
                  onChange={(e) => handleChange(e)}
                  checked={
                    contactData.requestExtension ? contactData.requestExtension : false
                  }
              />
            </Col>
          </Row>
        </Row>

        <Row className="mb-200" style={{ marginBottom: 30 }}>
          <Row>
            <Col style={{ marginBottom: 10 }}>
              {" "}
              <h4>DATOS EMPRESA</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Nombre de Empresa</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={contactData?.contactId !== null}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  value={async () => {
                    return await valueField(contactData.companyId, "companyId");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>

            <Col>Actividad Economica</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Empresas Lookup</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={contactData?.contactId !== null}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  value={async () => {
                    return await valueField(contactData.companyId, "companyId");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>

            <Col></Col>
            <Col sm={4}>
              
            </Col>
          </Row>
        </Row>

        <Row className="mb-200" style={{ marginBottom: 30 }}>
          <Row>
            <Col style={{ marginBottom: 10 }}>
              {" "}
              <h4>DESCRIPCION DEL CONTACTO</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Descripción</Col>
            <Col sm={4} align="start">
              {/* <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              /> */}
              <Form.Control as="textarea"  />
            </Col>

            <Col>No participación del correo electrónico</Col>
            <Col sm={4} align="start">
              <input
                  type="checkbox"
                  className="input-group-text"
                  name="requestExtension"
                  onChange={(e) => handleChange(e)}
                  checked={
                    contactData.requestExtension ? contactData.requestExtension : false
                  }
              />
            </Col>
          </Row>

        </Row>

        <Row className="mb-200" style={{ marginBottom: 30 }}>
          <Row>
            <Col style={{ marginBottom: 10 }}>
              {" "}
              <h4>ATENCION</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Banca</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={contactData.typeId}
                paramsRequired={paramsRequired.requiredType}
              />
            </Col>

            <Col>Team Leader</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={contactData?.contactId !== null}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  value={async () => {
                    return await valueField(contactData.companyId, "companyId");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Sucursal BC</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={contactData?.contactId !== null}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  value={async () => {
                    return await valueField(contactData.companyId, "companyId");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>

            <Col>Supervisor</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={contactData?.contactId !== null}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  value={async () => {
                    return await valueField(contactData.companyId, "companyId");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Gerente</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={contactData?.contactId !== null}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  value={async () => {
                    return await valueField(contactData.companyId, "companyId");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>

            <Col>Oficial</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={contactData?.contactId !== null}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  value={async () => {
                    return await valueField(contactData.companyId, "companyId");
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>
          </Row>
          
        </Row>

        <Row style={{ marginBottom: 30 }}>
          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS ADICIONALES</h4>{" "}
            </Col>
          </Row>
          <Row align="end">
            <Col>Carga de archivo</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  type="file"
                  name="attachmentFile"
                  onChange={(e) => handleChange(e)}
                />
              </InputGroup>
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default Forms;
