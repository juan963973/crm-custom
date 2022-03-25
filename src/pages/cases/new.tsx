import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, InputGroup, FormControl } from "react-bootstrap"
import Select from 'react-select';

function New() {
  const personOptions = [
    { value: 'Jessi', label: 'Jessi' },
    { value: 'Anto', label: 'Anto' },
    { value: 'Marcos', label: 'Marcos' },
    { value: 'New Persona', label: 'New Persona' }
  ]

  const EnterpriseOptions = [
    { value: 'Patria', label: 'Patria' },
    { value: 'Avalon', label: 'Avalon' },
    { value: 'Bepsa', label: 'Bepsa' },
    { value: 'New enterprise', label: 'New enterprise' }
  ]

  const idOptions = [
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Cédula', label: 'Cédula' },
    { value: 'RUC', label: 'RUC' },
    { value: 'Pasaporte', label: 'Pasaporte' }
  ]

  const caseType = [
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Consulta', label: 'Consulta' },
    { value: 'Solicitud', label: 'Solicitud' },
    { value: 'Reclamo', label: 'Reclamo' }
  ]

  const caseOrigin = [
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Consulta', label: 'Consulta' },
    { value: 'Solicitud', label: 'Solicitud' },
    { value: 'Reclamo', label: 'Reclamo' }
  ]

  const caseStatus = [
    { value: 'Undefined', label: 'Undefined' },
    { value: 'Consulta', label: 'Consulta' },
    { value: 'Solicitud', label: 'Solicitud' },
    { value: 'Reclamo', label: 'Reclamo' }
  ]


  return (
    <>

      <Container className="shadow-sm p-3 mb-5 bg-white rounded mt-2">
        <Row className="justify-content-end">
          <Col sm={2}> <h4>Crear caso</h4> </Col>
          <Col sm={2}>
            <Form.Select>
              <option value="1">Diseños</option>
              <option value="2">Standard</option>
              <option value="3">Test</option>
            </Form.Select>
          </Col>
          <Col align="end">
            <Button variant="secondary">Cancelar</Button>{' '}
            <Button variant="secondary">Guardar y nuevo</Button>{' '}
            <Button variant="primary">Guardar</Button>{' '}
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='mt-200' style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>Nro Ticket - Cronometro</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Tiempo</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
        </Row>

        <Row className='mt-200' style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>Cliente</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Nombre y Apellido</Col>
            <Col sm={4} align="start">
              <Select
                isMulti
                name="colors"
                options={personOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Col>

            <Col>Empresa name</Col>
            <Col sm={4} align="start">
              <Select
                isMulti
                name="colors"
                options={EnterpriseOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Col>
          </Row>
        </Row>

        <Row className='mb-200' style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>DATOS DEL CLIENTE</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Tipo de documento</Col>
            <Col sm={4} align="start">
              <Select
                name="colors"
                options={idOptions}
                className="basic-single"
                classNamePrefix="select"
              />
            </Col>

            <Col>Correo electrónico</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Nro. de Documento Cliente</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>Celular</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Código Cliente</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>Phone</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end" style={{ marginBottom: 40 }}>
            <Col>Sucursal Cliente</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col></Col><Col sm={4}>
            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>DATOS DEL CONTACTO</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Nombre y Apellido (Gestor)</Col>
            <Col sm={4} align="start">
              <Select
                isMulti
                name="colors"
                options={personOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Col>

            <Col>Nro. de Documento Gestor</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
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
                />
              </InputGroup>
            </Col>

            <Col>Email Gestor</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>CALIFICACIÓN DEL CASO</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Type</Col>
            <Col sm={4} align="start">
              <Select
                name="colors"
                options={caseType}
                className="basic-single"
                classNamePrefix="select"
              />
            </Col>
            <Col></Col>
            <Col sm={4}>

            </Col>
          </Row>

          <Row align="end">
            <Col>Subtipo</Col>
            <Col sm={4} align="start">
              <Select
                name="colors"
                options={caseType}
                className="basic-single"
                classNamePrefix="select"
              />
            </Col>
            <Col></Col>
            <Col sm={4}>

            </Col>
          </Row>

          <Row align="end">
            <Col>Tipificación</Col>
            <Col sm={4} align="start">
              <Select
                name="colors"
                options={caseType}
                className="basic-single"
                classNamePrefix="select"
              />
            </Col>
            <Col></Col>
            <Col sm={4}>

            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>EXPLICACIÓN DEL CASO</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Subject</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col></Col>
            <Col sm={4}>

            </Col>

          </Row>

          <Row align="end" style={{ marginBottom: 40 }}>
            <Col>Descripción del Caso</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col></Col>
            <Col sm={4}>

            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>DATOS DEL CASO</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Case Origin</Col>
            <Col sm={4} align="start">
              <Select
                name="colors"
                options={caseOrigin}
                className="basic-single"
                classNamePrefix="select"
              />
            </Col>

            <Col>Case Owner</Col>
            <Col sm={4} align="start">
              <Select
                name="colors"
                options={personOptions}
                className="basic-single"
                classNamePrefix="select"
              />
            </Col>
          </Row>

          <Row align="end" >
            <Col>Status</Col>
            <Col sm={4} align="start">
              <Select
                name="colors"
                options={caseStatus}
                className="basic-single"
                classNamePrefix="select"
              />
            </Col>

            <Col>Fecha/hora creado (auto)</Col>
            <Col sm={2}>
              <input className="mb-2 form-control" type="date" id="" name="" />
            </Col>
            <Col sm={2}>
              <input type="time" className='form-control' id="" name="" />
            </Col>
          </Row>

          <Row align="end">
            <Col>id ServiDesk</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col></Col>
            <Col sm={4}>
            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>RESOLUTORES DEL CASO</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Áreas Resolutoras</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>Oficial Negocio</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Personas Resolutoras</Col>
            <Col sm={4} align="start">
              <Select
                isMulti
                name="colors"
                options={personOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Col>

            <Col></Col>
            <Col sm={4}>

            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>RESOLUCIÓN / COMENTARIO</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Solution</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>Comentario de Contacto / Cierre</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Desea solicitar una prórroga para el caso?</Col>
            <Col sm={4}>
              <input type='checkbox' className='input-group-text' />
            </Col>

            <Col>Calificacion</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
        </Row>

        <Row style={{ marginBottom: 40 }}>
          <Row>
            <Col> <h4>DATOS ADICIONALES</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Carga de archivo 1</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <Form.Control type="file" />
              </InputGroup>
            </Col>

            <Col></Col>
            <Col sm={4}>

            </Col>
          </Row>
        </Row>

        <Row>
          <Row>
            <Col> <h4>USO INTERNO - AUTOMATIZACION</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Notas_auto</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>Fecha/Hora Cierre</Col>
            <Col sm={2}>
              <input className='form-control' type="date" id="" name="" />
            </Col>
            <Col sm={2}>
              <input className='form-control' type="time" id="" name="" />
            </Col>
          </Row>

          <Row align="end">
            <Col>Nro Ticket (auto)</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>Actualizado</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
        </Row>

        <Row style={{ marginTop: 40 }}>
          <Row>
            <Col> <h4>AUTOMATIZACION - FORM</h4> </Col>
          </Row>
          <Row align="end">
            <Col>Nombre/Empresa (auto)</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>RUC (auto)</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Nombre (auto)</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>Apellido (auto)</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row align="end">
            <Col>Teléfono Gestor (auto)</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>

            <Col>Email (auto)</Col>
            <Col sm={4}>
              <InputGroup className="mb-2">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default New