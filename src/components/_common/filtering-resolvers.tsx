import { Card, Col, Dropdown, FormControl, InputGroup, ListGroup, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useStoreFilter, useDispatchFilter } from "store/filter/FilterProvider";
import { getResolutionAreasFilter } from "services/searchService";
import Select from 'react-select';

export default function FilteringResolvers() {
    const dispatchFilter = useDispatchFilter();

    const [checked, setChecked] = useState([]);
    const [checkList, setCheckList] = useState([]);
    const [resolutorArea, setResolutorArea] = useState([]);
    const [checkListBackup, setCheckListBackup] = useState([]);
    const [checkListFilter, setCheckListFilter] = useState({});

    useEffect(() => {
        getResolutionAreasFilter()
            .then((response: any) => {
                setCheckList(response);
                setCheckListBackup(response);
                console.log(response[0])
            })
            .catch((e: any) => console.log(e));
    }, [])

    const handleChangeSearch = (event: any) => {
        var query = event.target.value;
        setCheckList(
            checkListBackup.filter((item) => {
                return item?.value?.toLowerCase().includes(query.toLowerCase());
            })
        )
    }

    const handleChangeResolutorArea = (values: any) => {
        dispatchFilter({ type: typesFilter.setFilter,  payload: values })
    }

    const resolverAreas = () => {
        var options:any = [];
        options = checkList.map((item:any) => {
            return {value: item.id, label: item.value}
        })
        return options
    }

    return (
        <Row style={{ marginBottom: '10px' }}>
            <Col>
                <Col sm={2} align="start">
                    <Select
                        name="colors"
                        options={resolverAreas()}
                        onChange={(e) => handleChangeResolutorArea(e)}
                        className="basic-select"
                        classNamePrefix="select"
                    />
                </Col>
            </Col>
        </Row>
    )
}