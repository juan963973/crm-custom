import { FormControl } from "react-bootstrap";
import DateRangePicker from 'rsuite/DateRangePicker';
import "rsuite/dist/rsuite.min.css";

const Datefield: any = (param:any) => {
  const handleChange = (e: any) =>{
    if(Object.keys(e).length === 0) return;
    const result = {
      target :   {
        id: param.keyFilter, 
        value: {
        from: dateFormat(e[0]),
        to: dateFormat(e[1])
      }}
    }
    console.log(dateFormat(new Date))
    param.onChange(result)
  }

  const dateFormat = (date:any)=>{
    var day = `0${date.getDate()}`.slice(-2); //("0"+date.getDate()).slice(-2);
    var month = `0${date.getMonth() + 1}`.slice(-2);
    var year = date.getFullYear();
    
    return `${year}-${month}-${day}`
  }

  return <DateRangePicker onChange={handleChange}  /> /*<FormControl type="date" className="mt-1" size="sm" onChange={param.onChange} id={param.keyFilter} />*/;
};

export default Datefield;