import React from "react";

const Form = props => {
  console.log(props);
  //problem with react bootstrap tags
  return (
    <div>
      <Form.Group controlId="formBasicEmail" className="formInput">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      {/* <Form.Group controlId={props.controlId} className={props.className}>
        <Form.Label>{props.Label}</Form.Label>
        <Form.Control
          type={props.type}
          as={props.as}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => props.changeHandler(e)}
        ></Form.Control>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group> */}
    </div>
  );
};

export default Form;
