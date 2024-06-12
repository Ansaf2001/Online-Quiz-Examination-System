import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:9192/api"
})

export const createQuestion = async(quizQustion) =>{
  try {
    const response = await api.post("/quizzes/create-new-question", quizQustion)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getAllQuestions = async() =>{
  try {
    const response = await api.get("/quizzes/all-questions")
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}



export const fetchQuizForUser = async(number, subject) =>{
  try {
    const response = await api.get(
			`/quizzes/quiz/fetch-questions-for-user?numOfQuestions=${number}&subject=${subject}`
		)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getSubjects = async() =>{
  try {
    const response = await api.get("/quizzes/subjects")
    return response.data
  } catch (error) {
    console.error(error)

  }
}

export const updateQuestion = async(id, question) =>{
  try {
    const response = await api.put(`/quizzes/question/${id}/update`, question)
    return response.data
  } catch (error) {
    console.error(error)

  }
}

export const getQuestionById = async(id) =>{
  try {
    const response = await api.get(`/quizzes/question/${id}`)
		return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteQuestion = async(id) =>{
  try {
    const response = await api.delete(`/quizzes/question/${id}/delete`)
		return response.data
  } catch (error) {
    console.error(error)
  }
}

export const registerUser = async (userData) => {
  try {
    const response = await api.post(`/auth/signup`,userData)
    return response.data;
  } catch (error) {
    console.error(error)
  }
}

export const loginUser = async (login) => {
  try {
    const response = await api.post(`/auth/authenticate`,login)
    return response.data;
  } catch (error) {
    console.error(error)
  }
}
