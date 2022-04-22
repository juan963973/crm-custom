import axios from "axios";
import { useEffect, useState } from "react";
import { TagPicker } from "rsuite";

interface PropsTools{
  endpoint:string,
  handleChange:(event: any, keyFilter: string ) => void;
  keyFilter: string,
  value: number[]

}

const MultipleArray = ({endpoint, handleChange, keyFilter, value=[]}:PropsTools) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://localhost:5001/v1/api/${endpoint}`
        );

        var dataArray = res.data.map((item:any)=>{
            var items = {"label":item.value, "value":item.id};
           return items;

        });
        setData(dataArray);

      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  console.log(value);
  
  
  return (
    <TagPicker data={data} onChange={(e)=>handleChange(e,keyFilter)} style={{ width: "100%" }} defaultValue={value} value={value} />
  );
};

export default MultipleArray;