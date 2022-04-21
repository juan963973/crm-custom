import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { multiSelectOption, multiSelectSimple } from "services/filterService";

interface toolFunction {
  endpoint: string;
  onChange: (event?: any) => void;
  keyFilter: string;
  value?: any;
  disabled?: boolean;
}

interface resultTool {
  id: number;
  value: string;
}

const MultipleSelect = ({
  endpoint,
  onChange,
  keyFilter,
  value = null,
  disabled = false,
}: toolFunction) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let result = [];
        if (endpoint == "Search/contacts" || endpoint == "Search/company") {
          result = await multiSelectOption(endpoint);
        } else {
          result = await multiSelectSimple(endpoint);
        }
        setData(result);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <Form.Select
      onChange={onChange}
      id={keyFilter}
      name={keyFilter}
      value={value}
      defaultValue={value}
      disabled={disabled}
    >
      <option value={null}>Seleccione ...</option>
      {data?.map(({ id, value }: resultTool) => (
        <option key={id} value={id}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
};

export default MultipleSelect;
