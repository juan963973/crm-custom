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
                endpoint={"Search/document-types"}
                onChange={handleChange}
                keyFilter={"documentTypeId"}
                value={contactData.documentTypeId}
              />
            </Col>

            <Col>Nacionalidad</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/nationalities"}
                onChange={handleChange}
                keyFilter={"nationality"}
                value={contactData.nationality}
              />
            </Col>
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
                  name="documentNumber"
                  onChange={(e) => handleChange(e)}
                  defaultValue={contactData.documentNumber}
                  style={!contactData.documentNumber ? styles.required : styles.complete}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Este campo no puede estar vacío
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col>Genero Contacto</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/gender-contact"}
                onChange={handleChange}
                keyFilter={"genderId"}
                value={contactData.genderId}
              />
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 10 }}>
              <Col>Nombre</Col>
              <Col sm={4} align="start">
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="firstName"
                  onChange={(e) => handleChange(e)}
                  defaultValue={contactData.firstName}
                  style={!contactData.firstName ? styles.required : styles.complete}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Este campo no puede estar vacío
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
                    name="dateOfBirth"
                    defaultValue={reference.dateOfBirth}
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
                  name="lastName"
                  onChange={(e) => handleChange(e)}
                  defaultValue={contactData.lastName}
                  style={!contactData.lastName ? styles.required : styles.complete}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Este campo no puede estar vacío
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col>Tipo de Cartera</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/wallet-types"}
                onChange={handleChange}
                keyFilter={"walletTypeId"}
                value={contactData.walletTypeId}
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
                endpoint={"Search/civil-status"}
                onChange={handleChange}
                keyFilter={"civilStatusId"}
                value={contactData.civilStatusId}
              />
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
                name="clientCode"
                defaultValue={reference.clientCode}
              />
            </Col>

            <Col>Es Cliente?</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/is-client"}
                onChange={handleChange}
                keyFilter={"isClient"}
                value={contactData.isClient}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Estado</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                  endpoint={"Search/client-states"}
                  onChange={handleChange}
                  keyFilter={"clientStatus"}
                  value={contactData.clientStatus}
                />
            </Col>

            <Col>Es Cliente Salario?</Col>
            <Col sm={4}>
                <MultipleSelect
                  endpoint={"Search/is-client-salary"}
                  onChange={handleChange}
                  keyFilter={"isClientSalary"}
                  value={contactData.isClientSalary}
                />
            </Col>
          </Row>


          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Tipo Persona</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                  endpoint={"Search/client-types"}
                  onChange={handleChange}
                  keyFilter={"clientType"}
                  value={contactData.clientType}
                />
            </Col>
            <Col>Es funcionario?</Col>
            <Col sm={4}>
            <MultipleSelect
                  endpoint={"Search/is-clerk"}
                  onChange={handleChange}
                  keyFilter={"isClerk"}
                  value={contactData.isClerk}
                />
            </Col>
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
                name="email"
                defaultValue={reference.email}
              />
            </Col>

            <Col>Móvil</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="mobile"
                defaultValue={reference.mobile}
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
                name="address"
                defaultValue={reference.address}
              />
            </Col>

            <Col>Departamento Contacto</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/departament"}
                onChange={handleChange}
                keyFilter={"department"}
                value={contactData.department}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Nro Domicilio</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="homeNumber"
                defaultValue={reference.homeNumber}
              />
            </Col>

            <Col>Ciudad</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"city"}
                value={contactData.city}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Referencia</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="reference"
                defaultValue={reference.reference}
              />
            </Col>

            <Col>Barrio</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="neighborhood"
                defaultValue={reference.neighborhood}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Enviar correspondencia a esta dirección?</Col>
            <Col sm={4} align="start">
              <input
                  type="checkbox"
                  className="input-group-text"
                  name="sendMailInThisDirection"
                  onChange={(e) => handleChange(e)}
                  checked={
                    contactData.sendMailInThisDirection ? contactData.sendMailInThisDirection : false
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
                name="workPlace"
                defaultValue={reference.workPlace}
              />
            </Col>

            <Col>Teléfono Laboral</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="workPhone"
                defaultValue={reference.workPhone}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Salario Actual</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="currentSalary"
                defaultValue={reference.currentSalary}
              />
            </Col>

            <Col></Col>
            <Col sm={4} align="start">
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
                  searchEndpoint="companies"
                  disabled={false}
                  keyFilter={"companyId"}
                  onChange={handleChange}
                  // defaultValue={{value: contactData.companyId, label: reference.companyId}}
                />
            </Col>

            <Col>Actividad Economica</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="economicActivity"
                defaultValue={reference.economicActivity}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Empresas Lookup</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="companies"
                  disabled={false}
                  keyFilter={"companiesIds"}
                  onChange={handleChange}
                  // defaultValue={reference.companiesIds}
                  // value={async () => {
                  //   return await valueField(contactData.companiesIds, "companiesIds");
                  // }}
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
              <h4>DESCRIPCION DEL CONTACTO</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Descripción</Col>
            <Col sm={4} align="start">
                <InputGroup className="mb-2">
                  <FormControl
                    as="textarea"
                    rows={3}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="description"
                    onChange={(e) => handleChange(e)}
                    defaultValue={contactData.description}
                  />
                </InputGroup>
            </Col>

            <Col></Col>
            <Col sm={4} align="start">
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
                endpoint={"Search/bancas"}
                onChange={handleChange}
                keyFilter={"bancaId"}
                value={contactData.bancaId}
              />
            </Col>

            <Col>Team Leader</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="clerks"
                  disabled={false}
                  keyFilter={"teamLeaderClerkId"}
                  onChange={handleChange}
                  // value={async () => {
                  //   return await valueField(contactData.teamLeaderClerkId, "teamLeaderClerkId");
                  // }}
                  // defaultValue={{value: contactData.teamLeaderClerkId, label: reference.teamLeaderClerkId}}
                />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Sucursal BC</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="contacts"
                  disabled={false}
                  keyFilter={"branchId"}
                  onChange={handleChange}
                  // value={async () => {
                  //   return await valueField(contactData.branchId, "branchId");
                  // }}
                  // defaultValue={{value: contactData.teamLeaderClerkId, label: reference.teamLeaderClerkId}}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>

            <Col>Supervisor</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="clerks"
                  disabled={false}
                  keyFilter={"supervisorClerkId"}
                  onChange={handleChange}
                  // value={async () => {
                  //   return await valueField(contactData.supervisorClerkId, "supervisorClerkId");
                  // }}
                  // defaultValue={{value: contactData.teamLeaderClerkId, label: reference.teamLeaderClerkId}}
                />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Gerente</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="clerks"
                  disabled={false}
                  keyFilter={"branchManagerClerkId"}
                  onChange={handleChange}
                  // value={async () => {
                  //   return await valueField(contactData.branchManagerClerkId, "branchManagerClerkId");
                  // }}
                  // defaultValue={{value: contactData.teamLeaderClerkId, label: reference.teamLeaderClerkId}}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>

            <Col>Oficial</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="clerks"
                  disabled={false}
                  keyFilter={"officialId"}
                  onChange={handleChange}
                  // value={async () => {
                  //   return await valueField(contactData.officialId, "officialId");
                  // }}
                  // defaultValue={{value: contactData.teamLeaderClerkId, label: reference.teamLeaderClerkId}}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>
          </Row>
          
        </Row>

        <Row className="mb-200" style={{ marginBottom: 30 }}>
          <Row>
            <Col style={{ marginBottom: 10 }}>
              {" "}
              <h4>DATOS REGISTRO</h4>{" "}
            </Col>
          </Row>
          <Row align="end" style={{ marginBottom: 20 }}>
            {/* <Col>Creado por </Col>
            <Col sm={4}>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col> */}
            <Col>Propietario de Contacto</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="clerks"
                  disabled={false}
                  keyFilter={"ContactOwnerId"}
                  onChange={handleChange}
                  // value={async () => {
                  //   return await valueField(contactData.ContactOwnerId, "ContactOwnerId");
                  // }}
                  // defaultValue={{value: contactData.teamLeaderClerkId, label: reference.teamLeaderClerkId}}
                />
                <Form.Control.Feedback type="invalid">
                  Ambos campos no pueden estar vacío
                </Form.Control.Feedback>
            </Col>
          </Row>

          {/* <Row align="end" style={{ marginBottom: 20 }}>
            <Col></Col>
            <Col sm={4}>
              
            </Col>
            <Col>Modificado</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
              />
            </Col>
          </Row> */}
        </Row>

      </div>
    </div>
  );
};

export default Forms;
