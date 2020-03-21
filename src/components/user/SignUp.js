import React, { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Location from "../common/PlacesAPI/Location";
import { CartContext } from "../../context/CartContext";

const SignUp = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [errUsername, setErrUsername] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [address, setAddress] = useState("");
  const [fullAdress, setFullAddress] = useState();
  const { login } = useContext(CartContext);
  const [DB] = useState(JSON.parse(localStorage.getItem("usersArr")));

  const gotoLogin = () => {
    props.history.push({
      pathname: `/sign-in`
    });
  };
  React.useEffect(() => {
    console.log(DB.find(ele => ele.email === email) === undefined);
  });
  const submitHandler = e => {
    e.preventDefault();
    let emailFlag = 0,
      usernameFlag = 0,
      passwordFlag = 0,
      addressFlag = 0;
    addressFlag = addressValidation(fullAdress);
    usernameFlag = usernameValidation();
    emailFlag = emailValidation();
    passwordFlag = passwordValidation();
    if (emailFlag && usernameFlag && passwordFlag && addressFlag) {
      if (DB.find(ele => ele.email === email) === undefined) {
        registerData();
        props.history.push({
          pathname: `/`
        });
      } else setErrEmail("Email already exist");
    }
  };

  const registerData = () => {
    const users = JSON.parse(localStorage.getItem("usersArr"));
    const user = {
      username: username,
      email: email,
      password: password,
      address: address
    };
    if (users) {
      localStorage.setItem("usersArr", JSON.stringify([...users, user]));
    } else {
      localStorage.setItem("usersArr", JSON.stringify([user]));
    }
    login(user);
  };

  const passwordValidation = () => {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/.test(password)) {
      if (password === confirmPass) {
        setErrPassword("");
        return 1;
      } else setErrPassword("passwords does not match");
    } else
      setErrPassword(
        "password must contain 8-20 characters, capital letter, lower letter and a number"
      );
    return 0;
  };

  const usernameValidation = e => {
    if (
      /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        username
      )
    ) {
      setErrUsername("");
      return 1;
    } else setErrUsername("username must be 6-20 characters long");
    return 0;
  };

  const emailValidation = e => {
    if (/^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)) {
      setErrEmail("");
      return 1;
    } else setErrEmail("please use a valid email");
    return 0;
  };

  const addressValidation = addressData => {
    if (/israel/gim.test(addressData[0].formatted_address)) {
      if (addressData[0].address_components[0].types[0] === "street_number") {
        setErrAddress("");
        return 1;
      } else setErrAddress("please choose a spasific address");
    } else setErrAddress("We only deliver inside israel");
    return 0;
  };
  return (
    <Container className="d-flex flex-row align-items-center">
      <Form
        className="mx-auto my-5 w-100"
        style={{ maxWidth: "500px" }}
        onSubmit={e => submitHandler(e)}
      >
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <Form.Text className="text-muted">{errUsername}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email@domain.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">{errEmail}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Form.Text className="text-muted">{errPassword}</Form.Text>
        </Form.Group>

        <Form.Group controlId="formConfimPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPass"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={e => setconfirmPass(e.target.value)}
          />
        </Form.Group>

        <Location
          address={address}
          setAddress={setAddress}
          fullAdress={fullAdress}
          setFullAddress={setFullAddress}
          errAddress={errAddress}
          addressValidation={addressValidation}
        />

        <Button type="submit" block>
          Sign Up
        </Button>

        <Button variant="secondary" block onClick={() => gotoLogin()}>
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(SignUp);
