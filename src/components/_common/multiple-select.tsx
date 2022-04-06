import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const MultipleSelect: any = ({endpoint, onChange, keyFilter, value}: any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://localhost:5001/v1/api/${endpoint}`
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
   fetchData()
  }, []);
  return (
    <Form.Select onChange={onChange} id={keyFilter} value={value.id??''} >
      <option value="" disabled>Seleccione ...</option>
      { data.map((res: any) => (
        <option key={res.id} value={res.id} >{ res.value}</option>
      ))}
    </Form.Select>
  );
};
export default MultipleSelect;