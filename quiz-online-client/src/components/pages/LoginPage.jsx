import "../../App.css";
import React, { useState } from "react";
import { loginUser } from "../../../utils/QuizService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
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
      const data = await loginUser(formData);
      if (data) {
        setParam({ success: true, error: null });
        navigate("/");
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
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div>
            <div className="alert alert-danger" style={{ display: param.error ? 'block' : 'none' }}>
              {param.error}
            </div>
          </div>
          <div>
            <div className="alert alert-success" style={{ display: param.success ? 'block' : 'none' }}>
              You have successfully logged in.
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} role="form" className="form-horizontal">
                <div className="form-group mb-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary">Submit</button><br /><br />
                  <span> Not registered? <a href="/register">Register/Signup here</a></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
