import { useState } from "react";
import React from "react";

const SignIn = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState("");
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });
  // const [result, setResult] = useState({});

  async function postFormFetch() {
    // eslint-disable-next-line no-console
    console.log("Form submission" + JSON.stringify(input));
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(input));
    try {
      setLoading("true");
      const response = await fetch(
        `http://127.0.0.1:8080/api/auth/sign-in`,
        settings
      );
      const json = await response.json();
      if (response.status !== 200) throw Error(json.message);
      return json;
    } catch (error) {
      alert(error);
      setLoading("null");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postFormFetch();
  };

  const handleInputChange = (e) => {
    e.persist();
    // eslint-disable-next-line no-console
    console.log(e.target.value);
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="main">
      <div className="input-wrap">
        <div className="h2">
          <h2>Sign in</h2>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrap">
            <input
              type="text"
              name="userName"
              placeholder="username"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.userName}
              required
            />
            <br />
          </div>
          <div className="input-wrap">
            <input
              type="password"
              name="password"
              placeholder="password"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.password}
            />
          </div>
          <div className="signup-button-container">
            <button className="signup-buttom" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
