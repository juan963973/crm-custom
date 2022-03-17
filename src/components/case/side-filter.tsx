import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Card,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { IoCaretDown } from "react-icons/io5";

function SideFilter() {
  
const [checked, setChecked] = useState([]);
const [checkList, setCheckList] = useState([]);

useEffect(() => {
  const request: any = {
    method: "get",
    url: "https://localhost:5001/v1/api/Filter/cases",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  axios(request)
    .then(function (response) {
      setCheckList(response.data);
    })
    .catch(function (error) {
      alert(error);
    });
}, []);

const handleCheck = (event:any) => {
  var updatedList = [...checked];
  if (event.target.checked) {
    updatedList = [...checked, event.target.value];
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }
  setChecked(updatedList);
};

var isChecked = (item:any) => checked.includes(item) ? true : false;

const dataMultiSelect: any = async (uri: any) => {
  return await axios.get(uri);
}

const Textfield:any = () => {
  return <input type="text" value="" onChange={(e) => {}} />
}

const MultipleSelect:any = (endpoint:any) => {
  const [data, setData] = useState([]);
  
  useEffect(() => { 
      async function fetchData() {
        try {
          const res = await axios.get(`https://localhost:5001/v1/api/${endpoint.endpoint}`);
          setData(res.data);
        } catch (err) {
            console.log(err);
        }
      }
      fetchData();
  }, []);
   return <select> {data.map((res:any) => <option value={res.id}>{res.value}</option>)} </select>
   
}

  return (
    <div className="app">
      <div className="checkList">
        <h6>Filtro por columnas:</h6>

        {/* ----------------------------------------------------------- */}
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <label htmlFor="">
                <input value={item.title} type="checkbox" onChange={handleCheck} /> {item.title}                
                {isChecked(item.title) && (
                  <>
                    {item.type == "Textfield" && <Textfield />}
                    {item.type == "MultipleSelect" && <MultipleSelect endpoint={item.endpoint} />}
                  </>
                )}
              </label>
            </div>
          ))}
        </div>
        {/* ----------------------------------------------------------- */}

      </div>
    </div>
  );
}

export default SideFilter;
