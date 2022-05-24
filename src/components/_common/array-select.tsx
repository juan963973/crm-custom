import axios from "axios";
import { useEffect, useState } from "react";
import { TagPicker } from "rsuite";

interface PropsTools {
  endpoint: string;
  handleChange: (event: any, keyFilter: string) => void;
  keyFilter: string;
  valueData: number[];
  defaultValue?: string;
  styleRequire?:any,
  paramsRequired?:boolean,
  placeholder?: string
  //changeStatus?:(keyFilter:string,value:any)=>void
}

const MultipleArray = ({
  endpoint,
  handleChange,
  keyFilter,
  valueData,
  defaultValue,
  styleRequire,
  paramsRequired,
    placeholder
  //changeStatus,
}: PropsTools) => {

  const [data, setData] = useState([]);
  const [countTry, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/${endpoint}`
        );

        var dataArray = res.data.map((item: any) => {
          var items = { label: item.value, value: item.id };
          return items;
        });

        setData(dataArray);

        if(defaultValue && !valueData){
          const _id = dataArray.filter((item:any) => item.label === defaultValue)
          
          handleChange([_id[0].value],keyFilter)
        }

      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // const defaultValueMultiple = () => {
  //   return valueData
  // }

  return (
    <TagPicker
        placeholder={placeholder}
      id={keyFilter}
      data={data}
      onChange={(e) => handleChange(e, keyFilter)}
      style={styleRequire}
      defaultValue={valueData}
      value={valueData}
      
    />
  );
};

export default MultipleArray;
