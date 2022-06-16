import { Col, FormControl, InputGroup } from "react-bootstrap";

const InputForm = ({ handleChange, valueData, sm, title, name, type='text' }: any) => {
  return (
    <>
      <Col>{title}</Col>
      <Col sm={sm}>
        <InputGroup className="mb-2">
          <FormControl
            type={type}
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
