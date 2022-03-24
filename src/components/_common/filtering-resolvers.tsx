import { Card, Col, Dropdown, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import styles from '../../../public/styles/case/Case.module.scss'
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useStoreFilter, useDispatchFilter } from "store/filter/FilterProvider";
import { getFieldsFilter } from "services/caseService";

export default function FilteringResolvers() {
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
        <Row>
            {/* <Col>Filter icon</Col> */}
            <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="" style={{ borderColor: '#edf0f4', borderStyle: 'solid' }}>
                        ADMINISTRACIÓN
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Card style={{ border: 'none' }}>
                            <Card.Header >
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
                            <Card.Body >
                                <div className={`app ${styles.scrollCard}`} style={{ height: "300px", width: '250px', overflow: "auto" }}>
                                    <div className="checkList">
                                        <h6>Vistas Públicas:</h6>
                                        <div className="list-container">
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                            <p>una cosa</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>


                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    )
}