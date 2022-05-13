import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { multiSelectOption, multiSelectSimple } from "services/filterService";

interface ToolFunction {
  endpoint: string;
  onChange: (event?: any,name?:any) => void;
  keyFilter: string;
  value?: any;
  defaultValue?:string,
  disabled?: boolean;
  changeStatus?:(keyFilter:string, value:number)=>void
  styleRequired?:any;
  required?:boolean;
  paramsRequired?:any
}

interface ResultTool {
  id: number;
  value: string;
}

const MultipleSelect = ({
  endpoint,
  onChange,
  keyFilter,
  value = null,
  disabled = false,
  defaultValue,
  changeStatus,
  styleRequired,
  paramsRequired
}: ToolFunction) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let result:any;
        if (endpoint == "Search/contacts" || endpoint == "Search/companies") {
          result = await multiSelectOption(endpoint);
        } else {
          result = await multiSelectSimple(endpoint);
        }
        setData(result);

        if(defaultValue && !value){
          const _id = result.filter((item:any) => item.value === defaultValue)
          onChange(_id[0].id,keyFilter)
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [endpoint]);

  return (
    <Form.Select
      onChange={onChange}
      id={keyFilter}
      name={keyFilter}
      defaultValue={value}
      value={value}
      disabled={disabled}
      style={styleRequired}
      isInvalid={paramsRequired}
    >
      <option key={null} value={null}>Seleccione...</option>
      {data?.map(({ id, value }: ResultTool) => (
        <option key={id} value={id}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
};

export default MultipleSelect;
