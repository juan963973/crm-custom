import {useEffect, useState} from "react";
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
import styles from "../../../public/styles/Common.module.scss";
import Textfield from "components/_common/text-field";
import MultipleSelect from "components/_common/multiple-select";
import Datefield from "components/_common/date-field";
import dataSelect from "../../../data/data-select.json";
import {BsSearch} from "react-icons/bs";

import {typesFilter} from "store/filter/filterReducer";
import {useDispatchFilter} from "store/filter/FilterProvider";
import {getFieldsFilter} from "services/commonService";
import {CustomAsyncPaginate} from "./auto-scroll";
import {log} from "util";

const escapeRegexCharacters = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const SideFilter = ({module}: any) => {
    const dispatchFilter = useDispatchFilter();

    const [checked, setChecked] = useState([]);
    const [checkList, setCheckList] = useState([]);
    const [checkListBackup, setCheckListBackup] = useState([]);
    const [checkListFilter, setCheckListFilter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFieldsFilter(module)
            .then((res: any) => {
                setCheckList(res);
                setCheckListBackup(res);
                setLoading(false)
            })
            .catch((e: any) => console.log(e));
    }, []);

    const handleCheck = (event: any) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            console.log(event.target.value, updatedList)
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
            if (Object.keys(checkListFilter).length > 0) {

                Object.keys(checkListFilter).map((item: any) => {
                    if ((Object.keys(checkListFilter).some(p => p == event.target.value))) {
                        const {[event.target.value as keyof typeof checkListFilter]: _, ...newItems} = checkListFilter
                        setCheckListFilter(newItems);
                    }
                })
            }
        }
        setChecked(updatedList);
    };

    const handleChangeSearch = (event: any) => {
        const query = escapeRegexCharacters(event.target.value);

        setCheckList(
            checkListBackup.filter((item) => {
                return item?.title?.toLowerCase().includes(escapeRegexCharacters(query.toLowerCase()));
            })
        );
    };

    const isChecked = (item: any) => (checked.includes(item));

    const handleSaveFilter = (event: any, keyValue?: string) => {
        if (!event)  {
            setCheckListFilter(prevState => delete prevState[keyValue as keyof typeof checkListFilter])
            return;
        }

        const keyFilter = event.target.id === undefined ? event.target.name : event.target.id;
        const value = event.target.value;
        setCheckListFilter({...checkListFilter, [keyFilter]: value});
        return;
    };

    const handleSubmit = () =>
        dispatchFilter({type: typesFilter.setFilter, payload: checkListFilter});

    const handleClear = () => {
        setCheckListFilter({});
        setChecked([]);
        setCheckList(checkListBackup);
    }

    return (
        <>
            <Card className={styles.card}>
                <Card.Header className={styles.header}>
                    <h6 className="mt-2">Filtrar por:</h6>
                    <InputGroup className="mb-3 mt-2 fixed">
                        <InputGroup.Text id="basic-addon1" className={styles.inputbotton}>
                            <BsSearch/>
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
                                {loading ? 'Cargando...' : ''}
                                <Form id="formFilter">
                                    {checkList.map((item, index) => (
                                        <div key={item.key}>
                                            <Form.Check
                                                checked={isChecked(item.key)}
                                                inline
                                                style={{color: "black"}}
                                                label={item.title}
                                                value={item.key}
                                                onChange={handleCheck}
                                            />
                                            <div>
                                                {isChecked(item.key) && (
                                                    <>
                                                        {/* <Row>
                                                            <Col md={6} className="mb-1">
                                                                <Form.Select
                                                                    aria-label="Seleccione ..."
                                                                    size="sm"
                                                                >
                                                                    {dataSelect.map((data, index) => (
                                                                        <option value={data.value} key={index}>
                                                                            {data.label}
                                                                        </option>
                                                                    ))}
                                                                </Form.Select>
                                                            </Col>
                                                        </Row> */}
                                                        {item.type == "Textfield" && (
                                                            <Textfield
                                                                value={isChecked(item.key) ? checkListFilter[item.key as keyof typeof checkListFilter] : null}
                                                                onChange={handleSaveFilter}
                                                                keyFilter={item.key}
                                                            />
                                                        )}
                                                        {item.type == "Date" && (
                                                            <Datefield
                                                                value={isChecked(item.key) ? {valueData: checkListFilter[item.key as keyof typeof checkListFilter]} : null}
                                                                onChange={handleSaveFilter}
                                                                keyFilter={item.key}
                                                            />
                                                        )}
                                                        {item.type == "MultipleSelect" && (
                                                            <MultipleSelect
                                                                value={isChecked(item.key) ? checkListFilter[item.key as keyof typeof checkListFilter] : null}
                                                                endpoint={item.endpoint}
                                                                onChange={handleSaveFilter}
                                                                keyFilter={item.key}
                                                            />
                                                        )}
                                                        {
                                                            item.type === "Autocomplete" && (
                                                                <CustomAsyncPaginate
                                                                    returnObject
                                                                    searchEndpoint={item.endpoint}
                                                                    keyFilter={item.key}
                                                                    onChange={handleSaveFilter}
                                                                />
                                                            )}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                   
                                </Form>
                            </div>
                            {/* ----------------------------------------------------------- */}
                        </div>
                    </Container>
                </Card.Body>
                <Card.Footer >
                    <Button
                        className="btn-secondary btn-md" 
                        onClick={handleClear}
                        disabled={checked.length == 0}
                        style={{width: '45%'}}
                    >
                        Cancelar
                    </Button>
                    {' '}
                    <Button
                        className="submit-button btn-md"
                        onClick={handleSubmit}
                        disabled={checked.length == 0}
                        style={{width: '45%'}}
                    >
                        Aplicar
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

export default SideFilter;
