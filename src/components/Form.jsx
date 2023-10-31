import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ signUpForm, actionSubmit }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      fullname,
      email,
      password,
    });
    if (actionSubmit === "register") {
      actionSubmit(email, password, fullname);
    } else {
      actionSubmit(email, password);
    }
  };

  return (
    <>
      <form className="form-auth" onSubmit={handleSubmit}>
        {signUpForm ? (
          <div className="field-group">
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        <div className="field-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={`${signUpForm ? "create account" : "log in"}`}
        />
      </form>
      {signUpForm ? (
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link">
            Log In
          </Link>
        </p>
      ) : (
        <p>
          Don't have an account yet?{" "}
          <Link to="/" className="link">
            Sign Up
          </Link>
        </p>
      )}
    </>
  );
};

export default Form;
