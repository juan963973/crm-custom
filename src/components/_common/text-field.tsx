import { FormControl } from "react-bootstrap";

const Textfield: any = ({onChange, keyFilter}:any) => {
  return <FormControl className="mt-1" size="sm" onChange={onChange} id={keyFilter}/>;
};

export default Textfield;
