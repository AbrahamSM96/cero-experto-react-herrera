import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {}, []);

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    console.log(target.name);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  console.log(formState, "FORM STATE");
  return (
    <>
      <h1>UseEffect simple form</h1>
      <hr></hr>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      {name === "pedro" && <Message />}
    </>
  );
};
