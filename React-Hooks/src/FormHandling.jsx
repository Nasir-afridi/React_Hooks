import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("form is submitted");
    console.log("Name is : ", name);
    console.log("Email is : ", email);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormHandling;
