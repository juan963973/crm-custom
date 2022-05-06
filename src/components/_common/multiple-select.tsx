import { AnyAaaaRecord } from "dns";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { multiSelectOption, multiSelectSimple } from "services/filterService";

interface ToolFunction {
  endpoint: string;
  onChange: (event?: any) => void;
  keyFilter: string;
  value?: any;
  defaultValue?:string,
  disabled?: boolean;
  changeStatus?:(keyFilter:string, value:number)=>void
  styleRequired?:any;
  required?:boolean;
  params?:any
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
  required = true,
  params,
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
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [endpoint]);

  // const defaultValueMultiple = () => {
  //   if(!value && defaultValue){
  //     const _id:any = data.filter((item) => item.value === defaultValue)
  //     setTimeout(() => {
  //       changeStatus(keyFilter,_id[0]?.id)
  //     }, 1000);
  //     return _id[0]?.id
  //   }else{
  //     return value
  //   }
  // }

  
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
      <option key={undefined} value={undefined}>Seleccione...</option>
      {data?.map(({ id, value }: ResultTool) => (
        <option key={id} value={id}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
};

export default MultipleSelect;
