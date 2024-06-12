import React from "react"
import { NavLink } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';



const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-secondary px-5 shadow sticky-top rounded-pill" >
			<div className="container-fluid">
				<NavLink className="navbar-brand" to={"/"}>
					Department of IT
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
{/* 
				<Nav.Item>
        			<Nav.Link href="/quiz-stepper">Take Quiz</Nav.Link>
      			</Nav.Item> */}


				{/* <div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						

						<li className="nav-item">
							<NavLink className="nav-link" to={"/quiz-stepper"}>
								Take Quiz
							</NavLink>
							
						</li>
						
						
					</ul>
				</div> */}


				{/* <div  className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
					
						<li className="nav-item">
							<NavLink className="btn btn-login" to={"/quiz-result"}>
                                Login
                            </NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={"/quiz-result"}>
                                Sign Up
                            </NavLink>
						</li>
						
					</ul>
					
						
				</div> */}
		<Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/admin">Admin</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
	  <Nav.Item>
        <Nav.Link href="/register">Sign Up</Nav.Link>
      </Nav.Item>
     
    </Nav>
			</div>
		</nav>
	)
}

export default Navbar
