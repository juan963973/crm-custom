import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { PaisesService } from "services/companyService";

const SelectCountry = ({handleChange}:any) =>{
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await PaisesService();
    //             console.log(data)
    //             setData(res);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }

    //     fetchData();
    // }, []);


    return (
      <Form.Select
          placeholder="Seleccione una Nacionalidad"
          onChange={handleChange}
          id="nationality"
          name="nationality"

      >
          <option key={null} value={null}>Seleccione...</option>
          {/* {res?.map(({id, value}: ResultTool) => (
              <option key={id} value={id}>
                  {value}
              </option>
          ))} */}
      </Form.Select>
  )

}

export default SelectCountry;