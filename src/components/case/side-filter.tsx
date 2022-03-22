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
} from "react-bootstrap";
import styles from "../../../public/styles/case/Case.module.scss";
import Textfield from "components/_common/text-field";
import MultipleSelect from "components/_common/multiple-select";
import Datefield from "components/_common/date-field";
import dataSelect from "../../../data/data-select.json"
import { BsSearch } from "react-icons/bs";

import { types } from "store/filter/storeReducer";
import { useDispatch, useStore } from "store/filter/StoreProvider";

function SideFilter() {

const store = useStore();
const dispatch = useDispatch();
// const {user, products} = useStore();


const [checked, setChecked] = useState([]);
const [checkList, setCheckList] = useState([]);

useEffect(() => {
  const request: any = {
    method: "get",
    url: "https://localhost:5001/v1/api/Filter/cases",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  axios(request)
    .then(function (response) {
      setCheckList(response.data);
    })
    .catch(function (error) {
      alert(error);
    });
}, []);

const handleCheck = (event:any) => {
  var updatedList = [...checked];
  if (event.target.checked) {
    updatedList = [...checked, event.target.value];
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }
  setChecked(updatedList);
};

const handleClick = (dispatch:any) => {
  // setFilter({type: 'holaaa'});
    dispatch({
      type: types.setFilter, 
      payload: { type: 2 }
    })
  console.log(checked)
}

var isChecked = (item:any) => checked.includes(item) ? true : false;

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
                                    )
                                  )}
                                </Form.Select>
                              </Col>
                            </Row>
                            {item.type == "Textfield" && <Textfield />}
                            {item.type == "Date" && <Datefield />}
                            {item.type == "MultipleSelect" && <MultipleSelect endpoint={item.endpoint} />}
                          </>
                        )}
                      </div>  
                  </div>
                ))}
              </div>
              {/* ----------------------------------------------------------- */}

            </div>
            <input type="button" value="Filtrar" onClick={() => handleClick(dispatch)} />
          </Container>
        </Card.Body>
      </Card>  
    </>  
  );
}

export default SideFilter;
