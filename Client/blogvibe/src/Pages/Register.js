import React, { useState } from "react";
import "../Styles/login.css";
import { Link } from "react-router-dom";
export const Register = () => {
  const [active, setActive] = useState(true);

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    console.log("e", value, name);
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("input Value", inputValue);
    fetch("http://localhost:4500/register", {
      method: "POST",
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache",
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/json",
      // },

      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((data) => console.log("data", data))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <section className="login_section">
        <div className={active ? "container" : "active"}>
          <div class="user signinBx">
            <div class="formBx">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                  return false;
                }}
              >
                <h2>Create an account</h2>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputValue}
                  placeholder="Username"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleInputValue}
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleInputValue}
                  placeholder="Create Password"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={handleInputValue}
                  placeholder="Phone Number"
                />
                <input type="submit" name="" value="Sign Up" />
                <p class="signup">
                  Already have an account ?<Link to="/login">Sign in.</Link>
                </p>
                !
              </form>
            </div>
            <div class="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};
