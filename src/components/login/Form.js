import React from "react";

const form = props => {
  return (
    <form onSubmit={e => props.loginValidation(e)}>
      <input
        className="field"
        type="text"
        placeholder="email"
        name="email"
      ></input>
      <p>{props.msgEmail}</p>

      <input
        className="field"
        type="text"
        placeholder="password"
        name="password"
      ></input>
      <p>{props.msgPassword}</p>

      <input className="button" type="submit" value="Submit"></input>
      <input
        className="button"
        onClick={() => props.startRegister(false)}
        type="button"
        value="register"
      ></input>
      <p>{props.loggedIn ? "logged In" : ""}</p>
    </form>
  );
};

export default form;
