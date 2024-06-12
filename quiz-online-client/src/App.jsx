import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import QuizStepper from "./components/quiz/QuizStepper"
import Quiz from "./components/quiz/Quiz"
import QuizResult from "./components/quiz/QuizResult"
import GetAllQuiz from "./components/quiz/GetAllQuiz"
import AddQuestion from "./components/question/AddQuestion"
import UpdateQuestion from "./components/question/UpdateQuestion"
import Navbar from "./components/layout/NavBar"
import Admin from "./components/Admin"
import RegisterPage from "./components/pages/RegisterPage"
import LoginPage from "./components/pages/LoginPage"
//import ProfilePage from "./components/pages/ProfilePage"
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage"
//import ResetPasswordPage from "./components/pages/ResetPasswordPage"
//import PrivateRoute from "./components/PrivateRoute"
import LandingPage from "./components/pages/LandingPage"




function App() {
	// const logoUrl = 
	// "http://www.sliate.ac.lk/images/ati/logo.png"; 
	return (
		
		
		<main className="container mt-5 mb-5">

			<header class="text-center">
      			<img src="../src/assets/logo.png" alt="Header Image" height={"120"} width={"900"} margin={"auto"} />
      				{/* Your header content */}
    		</header>

				{/* <img style={{ display: "block", margin: "auto" }} src={logoUrl} 
					width="900" height="120"
					alt="Logo" />  */}
		
		{/* <div>
      		<header style={{ backgroundColor: 'cyan' }}>
        		This is the header
      		</header>
    	</div>
			 */}
		
			 {/* <>
			 <FooterContainer />
			 </> */}


			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quiz-stepper" element={<QuizStepper />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />
					
					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
			---------------------------------------------------------------- 
					 <Route path="/" element={ <LandingPage /> } /> 
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage /> } />
                    {/* <Route path="/home" component={ HomePage } /> */}
				</Routes>
			</Router>
		</main>
	)
}





export default App;
