import { FormControl } from "react-bootstrap";
import DateRangePicker from 'rsuite/DateRangePicker';
import "rsuite/dist/rsuite.min.css";

const Datefield: any = (param:any) => {
  return <DateRangePicker onChange={param.onChange} id={param.keyFilter} /> /*<FormControl type="date" className="mt-1" size="sm" onChange={param.onChange} id={param.keyFilter} />*/;
};

export default Datefield;