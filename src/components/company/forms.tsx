import { CustomAsyncPaginate } from "components/_common/auto-scroll";
import { Col, Form, InputGroup, Row, FormControl } from "react-bootstrap";



const FormCompany = () => {
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
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="companyName"
                />
              </InputGroup>
            </Col>

            <Col>Fecha Fundación</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="dateFundation"
                  type="date"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Nacionalidad</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Ruc</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="rucCompany"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Tipo Cliente</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="customerType"
                />
              </InputGroup>
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
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col>Rango de Facturación Anual</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Descripción</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Tipo de Cartera</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Cantidad de funcionarios</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Entidad Financiera para pago de Salarios</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Actividad Económica</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Entidad financiera en la que opera</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Origen de los fondos</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Lista de Actividad Economica</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS DE CONTACTO</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Contacto Lookup</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col>Telefono Movil</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Correo electrónico</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Teléfono</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Email Empresa</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
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
            <Col>Dirección</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Departamento</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Referencia</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Ciudad</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Nro Casa</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Barrio</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DIRECCION DE FACTURACION</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>País de facturación</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Estado de facturación</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="rucCompany"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Domicilio de facturación</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Ciudad de facturación</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="rucCompany"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS CLIENTE</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Codigo Cliente</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="nationality"
                />
              </InputGroup>
            </Col>

            <Col>Banca</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Estado Cliente</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col>Es Cliente ?</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>DATOS REGISTRO</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Creado por</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Modificado por</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
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

          <Row align="end" className="mt-1">
            <Col>Team Leader</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Gerente Sucursal</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Supervisor</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row style={{ marginBottom: 10 }}>
            <Col>
              {" "}
              <h4>ATENCIÓN</h4>{" "}
            </Col>
          </Row>

          <Row align="end" className="mt-1">
            <Col>Sucursal</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col>Oficial</Col>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default FormCompany;
