import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Card,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import styles from "../../../public/styles/Case.module.scss";
import Textfield from "components/_common/text-field";
import MultipleSelect from "components/_common/multiple-select";
import Datefield from "components/_common/date-field";
import dataSelect from "../../../data/data-select.json";
import { BsSearch } from "react-icons/bs";

import { typesFilter } from "store/filter/filterReducer";
import { useStoreFilter, useDispatchFilter } from "store/filter/FilterProvider";
import { getFieldsFilter } from "services/caseService";

const SideFilter = ({page}:any) => {
  const dispatchFilter = useDispatchFilter();

  const [checked, setChecked] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [checkListBackup, setCheckListBackup] = useState([]);
  const [checkListFilter, setCheckListFilter] = useState({});

  useEffect(() => {
    getFieldsFilter(page)
        .then( (response:any) => {
          setCheckList(response);
          setCheckListBackup(response);
        })
        .catch((e:any) => console.log(e));
  }, [])

  const handleCheck = (event: any) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  }

  const handleChangeSearch = (event: any) => {
    var query = event.target.value;
    setCheckList(
      checkListBackup.filter((item) => {
        return item?.title?.toLowerCase().includes(query.toLowerCase());
      })
    )
  }

  var isChecked = (item: any) => (checked.includes(item) ? true : false);

  const handleSaveFilter = (event: any) => {
    var keyFilter = event.target.id;
    var value = event.target.value;
    setCheckListFilter({ ...checkListFilter, [keyFilter]: value });
  }

  const handleSubmit = () => dispatchFilter({ type: typesFilter.setFilter,  payload: checkListFilter }) 

  return (
    <>
      <Card className={styles.card}>
        <Card.Header className={styles.header}>
          <h6 className="mt-2">Filtrar Casos por:</h6>
          <InputGroup className="mb-3 mt-2 fixed">
            <InputGroup.Text id="basic-addon1" className={styles.inputbotton}>
              <BsSearch />
            </InputGroup.Text>
            <FormControl
              className={styles.input}
              onChange={handleChangeSearch}
              placeholder="Buscar"
              aria-label="Buscar"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Card.Header>
        <Card.Body>
          <Container className={`app ${styles.scrollCard}`} fluid>
            <div className="checkList">
              <h6>Filtro por columnas:</h6>

              {/* ----------------------------------------------------------- */}
              <div className="list-container">
                <Form id="formFilter">
                  {checkList.map((item, index) => (
                    <div key={index}>
                      <Form.Check
                        inline
                        style={{ color: "black" }}
                        label={item.title}
                        value={item.title}
                        onChange={handleCheck}
                      />
                      <div>
                        {isChecked(item.title) && (
                          <>
                            <Row>
                              <Col md={6} className="mb-1">
                                <Form.Select
                                  aria-label="Default select example"
                                  size="sm"
                                >
                                  {dataSelect.map((index) => (
                                    <option value={index.value}>
                                      {index.label}
                                    </option>
                                  ))}
                                </Form.Select>
                              </Col>
                            </Row>
                            {item.type == "Textfield" && (
                              <Textfield
                                onChange={handleSaveFilter}
                                keyFilter={item.key}
                              />
                            )}
                            {item.type == "Date" && (
                              <Datefield
                                onChange={handleSaveFilter}
                                keyFilter={item.key}
                              />
                            )}
                            {item.type == "MultipleSelect" && (
                              <MultipleSelect
                                endpoint={item.endpoint}
                                onChange={handleSaveFilter}
                                keyFilter={item.key}
                              />
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                  <Row className="mt-2">
                    <Col md={4}></Col>
                    <Col md={3}>
                      <Button
                        className="submit-button btn-sm" onClick={handleSubmit}
                      >
                        Aplicar
                      </Button>
                    </Col>
                    <Col md={3}>
                      <Button
                        className=" btn-sm btn-secondary" /*onClick={handleSubmit}*/
                      >
                        Cancelar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
              {/* ----------------------------------------------------------- */}
            </div>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default SideFilter;
