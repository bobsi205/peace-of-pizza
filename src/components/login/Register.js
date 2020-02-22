import React from "react";

const register = props => {
  return (
    <form>
      <input
        className="field"
        type="text"
        name="email"
        placeholder="email"
      ></input>
      <input
        className="field"
        type="text"
        name="password"
        placeholder="password"
      ></input>
      <input
        className="field"
        type="text"
        name="conPassword"
        placeholder="confirm password"
      ></input>
      <input className="button" type="submit"></input>
      <input
        className="button"
        onClick={() => props.startRegister(true)}
        type="button"
        value="login"
      ></input>
    </form>
  );
};

export default register;
