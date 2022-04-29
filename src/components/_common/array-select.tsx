import axios from "axios";
import { useEffect, useState } from "react";
import { TagPicker } from "rsuite";

interface PropsTools {
  endpoint: string;
  handleChange: (event: any, keyFilter: string) => void;
  keyFilter: string;
  valueData: number[];
  defaultValue?: string;
  styleRequire?:any
  //changeStatus?:(keyFilter:string,value:any)=>void
}

const MultipleArray = ({
  endpoint,
  handleChange,
  keyFilter,
  valueData = [],
  defaultValue,
  styleRequire
  //changeStatus,
}: PropsTools) => {

  const [data, setData] = useState([]);
  const [countTry, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://localhost:5001/v1/api/${endpoint}`
        );

        var dataArray = res.data.map((item: any) => {
          var items = { label: item.value, value: item.id };
          return items;
        });
        setData(dataArray);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // const defaultValueMultiple = () => {
  //   return valueData
  // }
  console.log("imprime");
  

  return (
    <TagPicker
      data={data}
      onChange={(e) => handleChange(e, keyFilter)}
      style={styleRequire}
     // style={"100%"}
      defaultValue={valueData}
      value={valueData}
    />
  );
};

export default MultipleArray;
