import MultipleArray from "components/_common/array-select";
import "rsuite/dist/rsuite.min.css";
import { CustomAsyncPaginate } from "components/_common/auto-scroll";
import MultipleSelect from "components/_common/multiple-select";
import { Col, Form, InputGroup, Row, FormControl } from "react-bootstrap";
import InputForm from "components/_common/input-components";
import {getDateStr, getHourStr} from "../_common/timeToString";

const FormCompany = ({ handleChange, companyData, dataCompany, cascade, dataDate, paramsRequired }: any) => {
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

  console.log('cascade::',cascade)

  return (
    <div className="container-fluid" style={{ marginTop: "126px" }}>
      <div style={{ paddingLeft: "25px" }}>
        <Row className="mt-100" style={{ marginBottom: 30 }}>
          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS BASICOS DE LA EMPRESA</h4>{" "}
            </Col>
          </Row>
          <Row align="end" className="mt-1">
            <Col>Nombre de Empresa</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  style={styles.required}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="name"
                  onChange={handleChange}
                  value={companyData.name}
                  required
                />
              </InputGroup>
            </Col>

            <Col>Ruc</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  style={styles.required}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="ruc"
                  onChange={handleChange}
                  value={companyData.ruc}
                  required
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Tipo Cliente</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.clientType}
                endpoint={"Search/client-types"}
                onChange={handleChange}
                keyFilter={"clientType"}
                disabled={true}
              />
            </Col>

            <Col>Fecha Fundación</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="foundation"
                  type="date"
                  onChange={handleChange}
                  value={dataDate}
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Nacionalidad</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.nationalityId}
                endpoint={"Search/nationalities"}
                onChange={handleChange}
                keyFilter={"nationalityId"}
              />
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DESCRIPCION DE LA EMPRESA</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Empresa Principal</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                searchEndpoint="companies"
                keyFilter={"parentCompanyId"}
                onChange={handleChange}
                returnObject
                defaultValue={{
                  value: companyData?.parentCompanyId,
                  label: companyData?.parentCompanyName,
                }}
              />
            </Col>

            <Col>Rango de Facturación Anual</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.billingRangeId}
                endpoint={"Search/billing-ranges"}
                onChange={handleChange}
                keyFilter={"billingRangeId"}
              />
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Descripción</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="description"
                  onChange={handleChange}
                  value={companyData.description}
                />
              </InputGroup>
            </Col>

            <Col>Tipo de Cartera</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.walletTypeId}
                endpoint={"Search/wallet-types"}
                onChange={handleChange}
                keyFilter={"walletTypeId"}
              />
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Cantidad de funcionarios</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  type="number"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="employersQuantity"
                  onChange={handleChange}
                  value={companyData.employersQuantity}
                />
              </InputGroup>
            </Col>

            <Col>Entidad Financiera para pago de Salarios</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.paymentEntity}
                endpoint={"Search/operating-entities"}
                onChange={handleChange}
                keyFilter={"paymentEntity"}
              />
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Actividad Económica (core)</Col>
            <Col sm={4} align="start">
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="economicActivity"
                  onChange={handleChange}
                  value={companyData.economicActivity}
                />
              </InputGroup>
            </Col>

            <Col>Entidad financiera en la que opera</Col>
            <Col sm={4} align="start">
              <MultipleArray
                placeholder={"Entidad financiera"}
                endpoint="Search/operating-entities"
                handleChange={handleChange}
                keyFilter="operatingEntitiesIds"
                valueData={companyData.operatingEntitiesIds}
                styleRequire={styles.multiple.size}
              />
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Origen de los fondos</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="sourceFunds"
                  onChange={handleChange}
                  value={companyData.sourceFunds}
                />
              </InputGroup>
            </Col>

            <Col>Lista de Actividad Economica</Col>
            <Col sm={4} align="start">
              <MultipleArray
                placeholder={"Actividad Económica"}
                endpoint="Search/economic-activities"
                handleChange={handleChange}
                keyFilter="economicActivitiesIds"
                valueData={companyData.economicActivitiesIds}
                styleRequire={styles.multiple.size}
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS DE CONTACTO</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Telefono Movil</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="mobile"
                  onChange={handleChange}
                  value={companyData.mobile}
                />
              </InputGroup>
            </Col>

            <Col>Correo electrónico</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="email"
                  onChange={handleChange}
                  value={companyData.email}
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Teléfono</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="phone"
                  onChange={handleChange}
                  value={companyData.phone}
                />
              </InputGroup>
            </Col>

            {/* <Col>Email Empresa</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="email"
                  onChange={handleChange}
                  value={companyData.email}
                />
              </InputGroup>
            </Col> */}
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DESCRIPCION DE LA EMPRESA</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Dirección</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="address"
                  onChange={handleChange}
                  value={companyData.address}
                />
              </InputGroup>
            </Col>

            <Col>Departamento</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.departmentId}
                endpoint={"Search/departament"}
                onChange={handleChange}
                keyFilter={"departmentId"}
              />
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <InputForm
              handleChange={handleChange}
              valueData={companyData.reference}
              sm={4}
              title="Referencia"
              name="reference"
            />
            <Col>Ciudad</Col>
            <Col sm={4}>
              <MultipleSelect
                endpoint={cascade.cityId}
                onChange={handleChange}
                keyFilter={"cityId"}
                value={companyData.cityId}
              />
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <InputForm
              type="number"
              handleChange={handleChange}
              valueData={companyData.homeNumber}
              sm={4}
              title="Nro Casa"
              name="homeNumber"
            />
            <InputForm
              handleChange={handleChange}
              valueData={companyData.neighborhood}
              sm={4}
              title="Barrio"
              name="neighborhood"
            />
          </Row>

          {/* <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DIRECCION DE FACTURACION</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <InputForm
              handleChange={handleChange}
              valueData={companyData.billingCountry}
              sm={4}
              title="País de facturación"
              name="billingCountry"
            />
            <Col>Estado de facturación</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.billingState}
                endpoint={"Search/departament"}
                onChange={handleChange}
                keyFilter={"billingState"}
              />
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <InputForm
              handleChange={handleChange}
              valueData={companyData.billingStreet}
              sm={4}
              title="Domicilio de facturación"
              name="billingStreet"
            />
            <Col>Ciudad de facturación</Col>
            <Col sm={4}>
              <MultipleSelect
                  endpoint={cascade.billingCity}
                  onChange={handleChange}
                  keyFilter={"billingCity"}
                  value={companyData.billingCity}
                />
            </Col>
          </Row> */}

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS CLIENTE</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Código Cliente</Col>
            <Col sm={4}>
              <FormControl
                    // handleChange={handleChange}
                    value={companyData.clientCode}
                    // sm={4}
                    title="Codigo Cliente"
                    name="clientCode"
                    disabled={true}
                    readOnly
              />
            </Col>
            <Col>Banca</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.bancaId}
                endpoint={"Search/bancas"}
                onChange={handleChange}
                keyFilter={"bancaId"}
              />
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Estado Cliente</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.clientState}
                endpoint={"Search/client-states"}
                onChange={handleChange}
                keyFilter={"clientState"}
              />
            </Col>
            <Col>Es Cliente ?</Col>
            <Col sm={4}>
              <MultipleSelect
                value={companyData.isClient}
                endpoint={"Search/is-client"}
                onChange={handleChange}
                keyFilter={"isClient"}
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS ENCARGADO</h4>{" "}
            </Col>
          </Row>
          <Row align="end" className="mt-1">
            <Col>Team Leader</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                searchEndpoint={"clerks"}
                keyFilter={"teamLeaderClerkId"}
                onChange={handleChange}
                defaultValue={{
                  value: companyData?.teamLeaderClerkId,
                  label: companyData?.teamLeaderClerkFullName,
                }}
              />
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Gerente Sucursal</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                searchEndpoint={"clerks"}
                keyFilter={"branchManagerClerkId"}
                onChange={handleChange}
                defaultValue={{
                  value: companyData?.branchManagerClerkId,
                  label: companyData?.branchManagerClerkFullName,
                }}
              />
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Supervisor</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                searchEndpoint={"clerks"}
                keyFilter={"supervisorClerkId"}
                onChange={handleChange}
                defaultValue={{
                  value: companyData?.supervisorClerkId,
                  label: companyData?.supervisorClerkFullName,
                }}
              />
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS REGISTRO</h4>{" "}
            </Col>
          </Row>
          {companyData?.userWhoCreatedName ? (
              <>
                <Row align="end" className="mt-1">
                  <Col>Creado por</Col>
                  <Col sm={4} align="start">
                    <InputGroup className="mb-2">
                      <FormControl
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                          name="foundation"
                          type="text"
                          value={companyData?.userWhoCreatedName ? companyData.userWhoCreatedName : 'Sin datos'}
                          readOnly
                      />
                    </InputGroup>
                  </Col>

                  <Col>Fecha creado</Col>
                  <Col sm={4} align="start">
                    <InputGroup className="mb-2">
                      <FormControl
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                          name="foundation"
                          type="text"
                          value={dataCompany?.createdAt ? `${getDateStr(dataCompany.createdAt)} - ${getHourStr(dataCompany.createdAt)} hs.` : 'Sin datos'}
                          readOnly
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <Row align="end" className="mt-1">
                  <Col>Modificado por</Col>
                  <Col sm={4} align="start">
                    <InputGroup className="mb-2">
                      <FormControl
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                          name="foundation"
                          type="text"
                          value={companyData?.userWhoUpdatedName ? companyData.userWhoUpdatedName : 'Sin datos'}
                          readOnly
                      />
                    </InputGroup>
                  </Col>
                  <Col>Fecha Modificado</Col>
                  <Col sm={4} align="start">
                    <InputGroup className="mb-2">
                      <FormControl
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                          name="foundation"
                          type="text"
                          value={dataCompany?.updatedAt ? `${getDateStr(dataCompany.updatedAt)} - ${getHourStr(dataCompany.updatedAt)} hs.` : 'Sin datos'}
                          readOnly
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </>
          ) : null}
          <Row align="end" className="mt-1">
            <Col>Propietario de empresa</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                  searchEndpoint="users"
                  keyFilter={"companyOwnerIdString"}
                  onChange={handleChange}
                  defaultValue={{
                    value: dataCompany?.companyOwnerIdString,
                    label: dataCompany?.fullNameCompanyOwner
                  }}
              />
            </Col>

            <Col></Col>
            <Col sm={4} align="start"></Col>
          </Row>


          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>ATENCIÓN</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Sucursal</Col>
            <Col sm={4} align="start">
              <CustomAsyncPaginate
                searchEndpoint={"branches"}
                keyFilter={"branchCode"}
                onChange={handleChange}
                defaultValue={{
                  value: companyData?.branchCode,
                  label: companyData?.branchName,
                }}
              />
            </Col>

            <Col>Oficial</Col>
            <Col sm={4} align="start">
              <div className={"invalid"}>
              <CustomAsyncPaginate
                required
                name="OficialId"
                searchEndpoint={"clerks"}
                keyFilter={"officialId"}
                onChange={handleChange}
                defaultValue={{
                  value: companyData?.officialId,
                  label: companyData?.officialName,
                }}
                //paramsRequired={paramsRequired.officialId}
                //inputRef={paramsRequired.textInputDt}
              />
              </div> 
              {<div className={"error_oficial"} style={{
                color: "#dc3545"
              }}>
                {paramsRequired.showElement ? <p>Campo Oficial es requerido</p> : null}
              </div> }
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default FormCompany;
