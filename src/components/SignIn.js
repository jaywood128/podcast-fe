import { useState } from "react";
import AuthService from "../services/auth.service";
import React from "react";
import authService from "../services/auth.service";

const SignIn = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState("");
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  // const [result, setResult] = useState({});

  // async function postFormFetch() {
  //   // eslint-disable-next-line no-console
  //   console.log("Form submission" + JSON.stringify(input));
  //   const settings = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(input),
  //   };
  //   // eslint-disable-next-line no-console
  //   console.log(JSON.stringify(input));
  //   try {
  //     setLoading("true");
  //     const response = await fetch(
  //       `http://127.0.0.1:8080/api/auth/sign-in`,
  //       settings
  //     );
  //     const json = await response.json();
  //     if (response.status !== 200) throw Error(json.message);
  //     return json;
  //   } catch (error) {
  //     alert(error);
  //     setLoading("null");
  //   }
  // }

  const submitSignIn = (e) => {
    e.preventDefault();
    // postFormFetch();
    // eslint-disable-next-line no-console
    // console.log(
    //   "User name and password sign in: " + input["username"],
    //   input["password"]
    // );
    // eslint-disable-next-line no-console
    console.log("Inside submit sign in");
    // eslint-disable-next-line no-console
    console.log(input);
    AuthService.login(input["username"], input["password"]).then(
      () => {
        // eslint-disable-next-line no-console
        console.log(authService.getCurrentUser);
        props.history.push("/library");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        // setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  const handleInputChange = (e) => {
    e.persist();
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

        <form onSubmit={(e) => submitSignIn(e)}>
          <div className="input-wrap">
            <input
              type="text"
              name="username"
              placeholder="username"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.username}
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
