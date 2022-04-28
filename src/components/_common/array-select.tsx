import axios from "axios";
import { useEffect, useState } from "react";
import { TagPicker } from "rsuite";

interface PropsTools{
  endpoint:string,
  handleChange:(event: any, keyFilter: string ) => void;
  keyFilter: string,
  valueData: number[],
  defaultValue?: string,
  changeStatus?:(keyFilter:string,value:any)=>void

}

const MultipleArray = ({endpoint, handleChange, keyFilter, valueData=[],defaultValue,changeStatus}:PropsTools) => {
  const [data, setData] = useState([]);
  const [countTry, setCount] = useState(0)

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
  
  const defaultValueMultiple = () => {
    console.log(valueData.length);
    if(valueData.length === 0 && defaultValue){
      const _id:any = data.filter((item) => item.label === defaultValue)
      // console.log(_id[0]?.value)
      // if(countTry==0){
      //   setCount(1)
      //   changeStatus(keyFilter,[_id[0]?.value])
      // }
      return [_id[0]?.value]
    }else{
      //setCount(0)
      return valueData
    }
  }

  
  
  return (
    <TagPicker data={data} onChange={(e)=>handleChange(e,keyFilter)} style={{ width: "100%" }} defaultValue={valueData.length>0?valueData:defaultValueMultiple()}  value={valueData.length>0?valueData:defaultValueMultiple()} />
  );
};

export default MultipleArray;