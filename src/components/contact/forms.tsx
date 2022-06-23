import { Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import MultipleSelect from "components/_common/multiple-select";
import "rsuite/dist/rsuite.min.css";
import MultipleArray from "components/_common/array-select";
import { CustomAsyncPaginate } from "components/_common/auto-scroll";
import { refenceField } from "services/contactService";

const Forms = ({
  handleChange,
  reference,
  contactData,
  dataContact,
  paramsRequired,
  cascade,
  dataDate,
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

  console.log('userWhoCreatedName', contactData.userWhoCreatedName)
  console.log('contactData', contactData)
  

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
                keyFilter={"nationalityId"}
                value={contactData.nationalityId}
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
                    onChange={(e) => handleChange(e)}
                    defaultValue={contactData.dateOfBirth}
                    value={dataDate}
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

            {/* {paramsRequired.form == 'edit' && ( */}
              {/* <> */}
                <Col>Codigo Cliente</Col>
                <Col sm={4} align="start">
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="clientCode"
                    onChange={(e) => handleChange(e)}
                    defaultValue={contactData.clientCode}
                    disabled={true}
                  />
                </Col>
              {/* </> */}
            {/* )} */}
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
            
            {paramsRequired.form == 'edit' ? (
              <>
                <Col>Es Cliente Salario?</Col>
                <Col sm={4}>
                    <MultipleSelect
                      endpoint={"Search/is-client-salary"}
                      onChange={handleChange}
                      keyFilter={"isClientSalary"}
                      value={contactData.isClientSalary}
                    />
                </Col>
              </>
              ): (
                <>
                  <Col></Col>
                  <Col sm={4}>
                  </Col>
                </>
            )}

          </Row>


          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Tipo Persona</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                  endpoint={"Search/client-types"}
                  onChange={handleChange}
                  keyFilter={"clientType"}
                  value={contactData.clientType}
                  disabled={true}
                />
            </Col>

            {paramsRequired.form == 'edit' ? (
              <>
                <Col>Es funcionario?</Col>
                <Col sm={4}>
                <MultipleSelect
                      endpoint={"Search/is-clerk"}
                      onChange={handleChange}
                      keyFilter={"isClerk"}
                      value={contactData.isClerk}
                    />
                </Col>
              </>
              ): (
                <>
                  <Col></Col>
                  <Col sm={4}>
                  </Col>
                </>
            )}
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
                defaultValue={contactData.address}
                onChange={(e) => handleChange(e)}
              />
            </Col>

            <Col>Departamento Contacto</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/departament"}
                onChange={handleChange}
                keyFilter={"departmentId"}
                value={contactData.departmentId}
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
                onChange={(e) => handleChange(e)}
                defaultValue={contactData.homeNumber}
              />
            </Col>

            <Col>Ciudad</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={cascade.cityId}
                onChange={handleChange}
                keyFilter={"cityId"}
                value={contactData.cityId}
                // defaultValue={contactData.cityId}
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
                defaultValue={contactData.reference}
                onChange={(e) => handleChange(e)}
              />
            </Col>

            <Col>Barrio</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="neighborhood"
                defaultValue={contactData.neighborhood}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Enviar correspondencia a esta dirección?</Col>
            <Col sm={4} align="start">
              <input
                  type="checkbox"
                  className="input-group-text"
                  name="sendMailInThisStreet"
                  onChange={(e) => handleChange(e)}
                  checked={
                    contactData.sendMailInThisStreet ? contactData.sendMailInThisStreet : false
                  }
              />
            </Col>

            <Col></Col>
            <Col sm={4}>
              
            </Col>
          </Row>

        </Row>
        
        {paramsRequired.sendCorrespondence && (
          <Row className="mb-200" style={{ marginBottom: 30 }}>
            <Row>
              <Col style={{ marginBottom: 10 }}>
                {" "}
                <h4>DIRECCION PARA CORRESPONDENCIA</h4>{" "}
              </Col>
            </Row>
            <Row align="end" style={{ marginBottom: 20 }}>
              <Col>Domicilio para correspondencia</Col>
              <Col sm={4} align="start">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  type="email"
                  name="email"
                  defaultValue={contactData.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el email"
                />
                <Form.Control.Feedback type="invalid">
                  Debe ingresar un email
                </Form.Control.Feedback>
              </Col>

              <Col>Estado para correspondencia</Col>
              <Col sm={4} align="start">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="mobile"
                  defaultValue={contactData.mobile}
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Row>

            <Row align="end" style={{ marginBottom: 20 }}>
              <Col>País para correspondencia</Col>
              <Col sm={4} align="start">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="mailingCountry"
                  defaultValue={contactData.mailingCountry}
                  onChange={(e) => handleChange(e)}
                />
              </Col>

              <Col>Ciudad para correspondencia</Col>
              <Col sm={4} align="start">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="mailingCity"
                  defaultValue={contactData.mailingCity}
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Row>

          </Row>
        )}

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
                defaultValue={contactData.workPlace}
                onChange={(e) => handleChange(e)}
              />
            </Col>

            <Col>Teléfono Laboral</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="workPhone"
                defaultValue={contactData.workPhone}
                onChange={(e) => handleChange(e)}
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
                defaultValue={contactData.currentSalary}
                onChange={(e) => handleChange(e)}
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
                  defaultValue={{
                    value: contactData?.companyId, 
                    label: contactData?.companyName
                  }}
                />
            </Col>

            <Col>Actividad Economica</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="economicActivity"
                defaultValue={contactData.economicActivity}
                onChange={(e) => handleChange(e)}
              />
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
                  defaultValue={{
                    value: contactData?.teamLeaderClerkId, 
                    label: contactData?.teamLeaderClerkName
                  }}
                />
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 20 }}>
            <Col>Sucursal BC</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="branches"
                  keyFilter={"branchCode"}
                  onChange={handleChange}
                  defaultValue={{
                    value: contactData?.branchCode, 
                    label: contactData?.branchName
                  }}
                />
            </Col>

            <Col>Supervisor</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="clerks"
                  disabled={false}
                  keyFilter={"supervisorClerkId"}
                  onChange={handleChange}
                  defaultValue={{
                    value: contactData?.supervisorClerkId, 
                    label: contactData?.supervisorClerkName
                  }}
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
                  defaultValue={{
                    value: contactData?.branchManagerClerkId, 
                    label: contactData?.branchManagerClerkName
                  }}
                />
            </Col>

            <Col>Oficial</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="clerks"
                  disabled={false}
                  keyFilter={"officialId"}
                  onChange={handleChange}
                  defaultValue={{
                    value: contactData?.officialId, 
                    label: contactData?.officialName
                  }}
                />
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

            <Col>Propietario de Contacto</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="clerks"
                  keyFilter={"contactOwnerId"}
                  onChange={handleChange}
                  defaultValue={{
                    value: contactData?.contactOwnerId, 
                    label: contactData?.contactOwnerName
                  }}
                />
            </Col>
          </Row>

          {dataContact?.userWhoCreatedName ? (
              <>
                <Row align="end" style={{ marginBottom: 20 }}>

                  <Col>Creado por</Col>
                  <Col sm={4} align="start">
                    <CustomAsyncPaginate
                        searchEndpoint="clerks"
                        keyFilter={"userWhoCreatedName"}
                        onChange={handleChange}
                        disabled={true}
                        defaultValue={{
                          value: dataContact?.userWhoCreatedName,
                          label: dataContact?.userWhoCreatedName
                        }}
                    />
                  </Col>
                </Row>
                <Row align="end" style={{ marginBottom: 20 }}>

                  <Col>Modificado por</Col>
                  <Col sm={4} align="start">
                    <CustomAsyncPaginate
                        searchEndpoint="clerks"
                        disabled={true}
                        keyFilter={"userWhoUpdatedId"}
                        onChange={handleChange}
                        defaultValue={{
                          value: dataContact?.userWhoModifiedName,
                          label: dataContact?.userWhoModifiedName
                        }}
                    />
                  </Col>
                </Row>
              </>
          ) : null}

        </Row>

      </div>
    </div>
  );
};

export default Forms;
