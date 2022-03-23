import { FormControl } from "react-bootstrap";

const Datefield: any = (param:any) => {
  return <FormControl type="date" className="mt-1" size="sm" onChange={param.onChange} id={param.keyFilter} />;
};


export default Datefield;