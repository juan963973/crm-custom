import { Col, FormControl, InputGroup } from "react-bootstrap";

const InputForm = ({ handleChange, valueData, sm, title, name }: any) => {
  return (
    <>
      <Col>{title}</Col>
      <Col sm={sm}>
        <InputGroup className="mb-2">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name={name}
            onChange={handleChange}
            value={valueData}
          />
        </InputGroup>
      </Col>
    </>
  );
};

export default InputForm;
