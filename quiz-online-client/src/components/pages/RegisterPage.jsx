import "../../App.css";
import React, { useState } from "react";
import {registerUser} from "../../../utils/QuizService"
import {  useNavigate} from "react-router-dom"


const RegistrationForm = () => {
    const navigate = useNavigate()
   
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [param, setParam] = useState({ success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
    //   const data = await UserService.registerUser(formData);
      const data = await registerUser(formData)
      console.log("data");
      console.log(data);
      if (data) {
        setParam({ success: true, error: null });
        navigate("/login")
      } else {
        setParam({ success: false, error: data.message });
      }
    } catch (error) {
        console.log(error);
      setParam({ success: false, error: "An error occurred. Please try again." });
    }
  };

  return (
    <div className="container" class="LR">
      <div className="row col-md-8 offset-md-2">
        <div className="card">
          <div className="card-header">
            <h2 className="text-center">Registration</h2>
          </div>
          {param.success && (
            <div className="alert alert-info">
              You have successfully registered our app!
            </div>
          )}
          {param.error && (
            <div className="alert alert-danger">
              {param.error}
            </div>
          )}
          <div className="card-body">
            <form onSubmit={handleSubmit}  role="form">
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
                <br />
                <br />
                <span>
                  Already registered? <a href="/login">Login here</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
