import { Form} from "react-bootstrap";
import { useEffect, useState } from "react";
import { typesFilter } from "store/filterResolutionAreas/filterReducer";
import { useDispatchFilter } from "store/filterResolutionAreas/FilterProvider";
import { getResolutionAreasFilter } from "services/searchService";

interface ResultTool {
    id: number;
    value: string;
}

export default function FilteringResolvers() {
    const dispatchFilter = useDispatchFilter();
    const [resolutionAreas, setResolutionAreas] = useState([]);

    useEffect(() => {
        getResolutionAreasFilter()
            .then((res: any) => {
                setResolutionAreas(res);
            })
            .catch((e: any) => console.log(e));
    }, [])

    const handleChange = (e: any) => dispatchFilter({ type: typesFilter.setFilter, payload: e.target.value })

    return (
        <div >
            <Form.Select
                onChange={handleChange} style={{ width: '240px' }}
            >
                <option key={''} value={''}>Todas las áreas resolutoras</option>
                {resolutionAreas?.map(({ id, value }: ResultTool) => (
                    <option key={id} value={id}>
                        {value}
                    </option>
                ))}
            </Form.Select>
        </div>
    )
}