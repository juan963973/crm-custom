import { FormControl } from "react-bootstrap";

const Datefield: any = ({onChange, keyFilter}:any) => {
  return <FormControl type="date" className="mt-1" size="sm" onChange={onChange} id={keyFilter} />;
};


export default Datefield;