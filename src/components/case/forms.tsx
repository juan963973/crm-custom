import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import MultipleSelect from "components/_common/multiple-select";
import "rsuite/dist/rsuite.min.css";
import MultipleArray from "components/_common/array-select";

const Forms = ({
  handleChange,
  reference,
  dataPromoter,
  caseData,
  //changeStatus,
}: any) => {
  const styles = {
    disable: {
      background: "white",
    },
    required:{
      borderLeftColor:"#E74C3C"
    },
    complete:{
      borderLeftColor:"gray"
    },
    multiple:{
      required:{
        borderLeftColor:"#E74C3C",
        width: "100%"
      },
      complete:{
        borderLeftColor:"gray",
        width: "100%"
      },
      size:{
        width: "100%"
      }
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-200" style={{ marginBottom: 40 }}>
          <Row>
            <Col>
              {" "}
              <h4>Cliente</h4>{" "}
            </Col>
          </Row>
          <Row align="end" className="mt-1">
            <Col>Nombre y Apellido</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/contacts"}
                onChange={handleChange}
                keyFilter={"contactId"}
                value={caseData.contactId}
                disabled={caseData?.companyId !== null}
              />
              {/* <UseAutocomplete/> */}
            </Col>

            <Col>Nombre de Empresa</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/companies"}
                onChange={handleChange}
                keyFilter={"companyId"}
                value={caseData.companyId}
                disabled={caseData?.contactId !== null}
              />
            </Col>
          </Row>
        </Row>

        <Row className="mb-200" style={{ marginBottom: 40 }}>
          <Row>
            <Col>
              {" "}
              <h4>DATOS DEL CLIENTE</h4>{" "}
            </Col>
          </Row>
          <Row align="end">
            <Col>Tipo de documento</Col>
            <Col sm={4} align="start">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="documentTypeName"
                defaultValue={reference.documentTypeName}
                style={styles.disable}
                disabled
              />
            </Col>

            <Col>Correo electrónico</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="email"
                  defaultValue={reference.email}
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Nro. de Documento Cliente</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <Form.Control
                  type="text"
                  required
                  name="contactDocumentNumber"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={reference.documentNumber}
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>

            <Col>Celular</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  defaultValue={reference.mobile}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Código Cliente</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  defaultValue={reference.clientCode}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>

            <Col>Teléfono</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  defaultValue={reference.phone}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 40 }}>
            <Col>Sucursal Cliente</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  defaultValue={reference.branchName}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col>
              {" "}
              <h4>DATOS DEL CONTACTO</h4>{" "}
            </Col>
          </Row>
          <Row align="end">
            <Col>Nombre y Apellido (Gestor)</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/contacts"}
                onChange={handleChange}
                keyFilter={"promoterId"}
                value={caseData.promoterId}
              />
            </Col>

            <Col>Nro. de Documento Gestor</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={dataPromoter.documentNumber}
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Celular Gestor</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={dataPromoter.mobile}
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>

            <Col>Email Gestor</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  defaultValue={dataPromoter.email}
                  style={styles.disable}
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col>
              {" "}
              <h4>CALIFICACIÓN DEL CASO</h4>{" "}
            </Col>
          </Row>
          <Row align="end" className="mb-2">
            <Col>Tipo</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/types"}
                onChange={handleChange}
                keyFilter={"typeId"}
                value={caseData.typeId}
                styleRequired={styles.required}
                required={true}
              />
              <Form.Control.Feedback type="invalid">
                  Tipo no puede estar vacío
              </Form.Control.Feedback>
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" className="mb-2">
            <Col>Subtipo</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/subtypes"}
                onChange={handleChange}
                keyFilter={"subtypeId"}
                value={caseData.subtypeId}
                styleRequired={styles.required}
                required={true}
              />
              <Form.Control.Feedback type="invalid">
                Subtipo no puede estar vacío
              </Form.Control.Feedback>
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" className="mb-2">
            <Col>Tipificación</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/typifications"}
                onChange={handleChange}
                keyFilter={"typificationId"}
                value={caseData.typificationId}
                styleRequired={styles.required}
                required={true}
              />
              <Form.Control.Feedback type="invalid">
                Tipificación no puede estar vacío
              </Form.Control.Feedback>
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col>
              {" "}
              <h4>EXPLICACIÓN DEL CASO</h4>{" "}
            </Col>
          </Row>
          <Row align="end">
            <Col sm={2}>Asunto</Col>
            <Col sm={6}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="subject"
                  onChange={(e) => handleChange(e)}
                  defaultValue={caseData.subject}
                  style={!caseData.subject?styles.required:styles.complete}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Asunto no puede estar vacío
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>

          <Row align="end" style={{ marginBottom: 40 }}>
            <Col sm={2}>Descripción del Caso</Col>
            <Col sm={6}>
              <InputGroup className="mb-2">
                <FormControl
                  as="textarea"
                  rows={3}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="description"
                  onChange={(e) => handleChange(e)}
                  defaultValue={caseData.description}
                />
              </InputGroup>
            </Col>
            <Col></Col>
            <Col sm={4}></Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col>
              {" "}
              <h4>DATOS DEL CASO</h4>{" "}
            </Col>
          </Row>
          <Row align="end">
            <Col>Origen de Caso</Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/origins"}
                onChange={handleChange}
                keyFilter={"originId"}
                value={caseData.originId}
                defaultValue="MOSTRADOR"
                styleRequired={styles.required}
                required={true}
                //changeStatus={changeStatus}
              />
              <Form.Control.Feedback type="invalid">
                Origen de Caso no puede estar vacío
              </Form.Control.Feedback>
            </Col>

            <Col>{/*Propietario de Caso*/}id ServiDesk</Col>
            <Col sm={4} align="start">
              {/* <MultipleSelect
                endpoint={"Search/case-owner"}
                onChange={handleChange}
                keyFilter={"caseOwnerId"}
                value={caseData.caseOwnerId}
              /> */}
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="idServidesk"
                  onChange={(e) => handleChange(e)}
                  defaultValue={caseData.idServidesk}
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" className="mt-2 mb-2">
            <Col sm={2}>
              <Form.Label>Estado</Form.Label>
            </Col>
            <Col sm={4} align="start">
              <MultipleSelect
                endpoint={"Search/case-status"}
                onChange={handleChange}
                keyFilter={"caseStatusId"}
                value={caseData.caseStatusId}
                defaultValue="ASIGNACION"
                //changeStatus={changeStatus}
                styleRequired={styles.required}
                required={true}
              />
              <Form.Control.Feedback type="invalid">
                  Estado no puede estar vacío
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row align="end">
            <Col>{/*id ServiDesk*/}</Col>
            <Col sm={4}>
              {/* <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="idServidesk"
                  onChange={(e) => handleChange(e)}
                  defaultValue={caseData.idServidesk}
                />
              </InputGroup> */}
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col>
              {" "}
              <h4>RESOLUTORES DEL CASO</h4>{" "}
            </Col>
          </Row>
          <Row align="end">
            <Col>Áreas Resolutoras</Col>
            <Col sm={4} align="start">
              <MultipleArray
                endpoint="Search/resolver-areas"
                handleChange={handleChange}
                keyFilter="resolutionAreaIds"
                valueData={caseData.resolutionAreaIds}
                defaultValue="Call Center"
                styleRequire={styles.multiple.required}
                //changeStatus={changeStatus}
              />
            </Col>
            <Col>Oficial Negocio</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="businessOfficer"
                  onChange={(e) => handleChange(e)}
                  defaultValue={caseData.businessOfficer}
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Personas Resolutoras</Col>
            <Col sm={4} align="start">
              <MultipleArray
                endpoint="Search/resolvers"
                handleChange={handleChange}
                keyFilter="resolverIds"
                valueData={caseData.resolverIds}
                styleRequire={styles.multiple.size}
              />
            </Col>

            <Col></Col>
            <Col sm={4}></Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col>
              {" "}
              <h4>RESOLUCIÓN / COMENTARIO</h4>{" "}
            </Col>
          </Row>
          <Row align="end">
            <Col>Solución</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="solution"
                  onChange={(e) => handleChange(e)}
                  defaultValue={caseData.solution}
                />
              </InputGroup>
            </Col>

            <Col>Comentario de Contacto / Cierre</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="clientComment"
                  onChange={(e) => handleChange(e)}
                  defaultValue={caseData.clientComment}
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Desea solicitar una prórroga para el caso?</Col>
            <Col sm={4}>
              <input
                type="checkbox"
                className="input-group-text"
                name="requestExtension"
                onChange={(e) => handleChange(e)}
                checked={
                  caseData.requestExtension ? caseData.requestExtension : false
                }
              />
            </Col>

            <Col>Calificación</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  name="qualification"
                  onChange={(e) => handleChange(e)}
                  defaultValue={caseData.qualification}
                />
              </InputGroup>
            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
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
      </Container>
    </>
  );
};

export default Forms;
