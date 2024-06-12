import React from "react"
import { useLocation, Link} from "react-router-dom"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)

		// const handleRetakeQuiz = () => {
		// 	alert("Oops! this functionality was not implemented!!!")
			
		// }
		

		return (
			<section className="container mt-5">
				<h3>Your Quiz Result Summary</h3>
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<br />
				<h5 className="text-success">Your total score is {percentage}%.</h5>
				<br />
				<br />

				<a href="/">
  				<button type="button" class="btn btn-outline-primary">
    				Retake Quiz
  				</button>
				</a>
				{/* <button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz} >
					Retake this quiz
				</button> */}
			</section>
		)
 }

 export default QuizResult