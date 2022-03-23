import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const MultipleSelect: any = (param: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://localhost:5001/v1/api/${param.endpoint}`
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <Form.Select onChange={param.onChange} id={param.keyFilter} >
      <option value="" selected>Seleccione</option>
      {" "}
      {data.map((res: any) => (
        <option value={res.id}>{res.value}</option>
      ))}{" "}
    </Form.Select>
  );
};
export default MultipleSelect;