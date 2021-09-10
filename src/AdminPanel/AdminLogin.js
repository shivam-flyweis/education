import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"; 
const AdminLogin = () => {
  localStorage.setItem("admintoken", JSON.stringify({ login: false }));
  localStorage.setItem("token", JSON.stringify({ login: false }));
  const history = useHistory();

  const [element, setelement] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const getValue = (e) => {
    name = e.target.name;
    value = e.target.value;
    setelement({ ...element, [name]: value });
    console.log(element);
  };
  const Submitbtn = async (e) => {
    e.preventDefault();
    const { email, password } = element;
    try {
      const res = await fetch(
        "http://localhost:5000/admin/authentication/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      try {
        const data = await res.json();
        localStorage.setItem("admintoken", JSON.stringify({ login: false }));
        localStorage.setItem("token", JSON.stringify({ login: false }));
        if (res.status == 500 || !data) {
          window.alert("Something went wrong");
        } else {
          window.alert("login successful");

          localStorage.setItem(
            "admintoken",
            JSON.stringify({ admintoken: data.token, login: true })
          );
          localStorage.setItem(
            "token",
            JSON.stringify({ token: data.token, login: true })
          );
          history.push("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            name="email"
                            onChange={getValue}
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            onChange={getValue}
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                          <input
                            type="submit"
                            onClick={Submitbtn}
                            defaultValue="Log In"
                            className="btn btn-success btn-lg px-5"
                          />
                        </div>
                      </form>

                      <hr />
                      <div className="text-center">
                        <Link className="small links" to="forgot-password.html">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
