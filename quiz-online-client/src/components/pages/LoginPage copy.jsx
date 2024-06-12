import React from 'react'
import '../../App.css'

const LoginForm = () => {
    const param = {}; // You need to define param object or import it from somewhere

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">

                    <div>
                        <div className="alert alert-danger" style={{ display: param.error ? 'block' : 'none' }}>Invalid Email or Password</div>
                    </div>
                    <div>
                        <div className="alert alert-success" style={{ display: param.logout ? 'block' : 'none' }}> You have been logged out.</div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">Login</h2>
                        </div>
                        <div className="card-body">
                            <form
                                method="post"
                                role="form"
                                action="/login"
                                className="form-horizontal"
                            >
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter email address"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Submit</button><br /><br />
                                    <span> Not registered ?
                                        <a href="/register">Register/Signup here</a>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
