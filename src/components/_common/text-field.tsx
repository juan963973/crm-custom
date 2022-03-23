import { FormControl } from "react-bootstrap";

const Textfield: any = (param:any) => {
  return <FormControl className="mt-1" size="sm" onChange={param.onChange} id={param.keyFilter}/>;
};

export default Textfield;
