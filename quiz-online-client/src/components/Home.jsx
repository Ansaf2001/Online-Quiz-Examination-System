import React from "react"
//import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
	return (
		<main>
			<Container>
      			<Row>
        			<Col><h3 className="mt-5">Welcome to online quiz for everyone</h3></Col>
        			{/* <Col><a href="/quiz-stepper">
  						<button type="button" class="btn btn-outline-primary">
    						Take Quiz
  						</button>
						</a>
					</Col> */}
      			</Row>
     
    		</Container>
			
			<hr />
			<br />
			
			{/* <nav className="nav flex-column">
				<Link to={"/take-quiz"} className="nav-link">
					Take Quiz
				</Link>
			</nav> */}

			 {/* <Button href="#">Link</Button> <Button type="submit">Button</Button> */}

			 						{/* <button
										type="button"
										onClick={handleAddChoice}
										className="btn btn-outline-primary">
										Take Quiz
	// 								</button> */}
	{/* // <Link to="/take-quiz">
  	// 	<Button variant="outline-light" size="lg">
    // 		Take Quiz
  	// 	</Button>
	// </Link> */}

			

		<Container className="container">
			<Row>
				<Col>
				<Card style={{ width: '18rem' }}>
      			<Card.Img variant="top" src="src/assets/java.jpeg" />
      			<Card.Body>
        			<Card.Title>Programming</Card.Title>
        			<Card.Text>
					Explore the world of coding and software development with our programming resources.
					Dive into world of programming.
        			</Card.Text>
        			
					<a href="/quiz-stepper">
  						<button type="button" class="btn btn-outline-primary">
    						Take Quiz
  						</button>
						</a>
      			</Card.Body>
    			</Card>
				</Col>

				<Col>
				<Card style={{ width: '18rem' }}>
      			<Card.Img variant="top" src="src/assets/ui.jpeg" />
      			<Card.Body>
        			<Card.Title>UI Design</Card.Title>
        			<Card.Text>
					Discover the principles and techniques of creating beautiful user interfaces with our UI design resources.

        			</Card.Text>
        			
					<a href="/quiz-stepper">
  						<button type="button" class="btn btn-outline-primary">
    						Take Quiz
  						</button>
						</a>
      			</Card.Body>
    			</Card>
				</Col>

				<Col>
				<Card style={{ width: '18rem' }}>
      			<Card.Img variant="top" src="src/assets/os.jpeg" />
      			<Card.Body>
        			<Card.Title>Operating System</Card.Title>
        			<Card.Text>
					Dive into the world of operating systems and learn about their architecture, functionalities, and more.
        			</Card.Text>
        	
					<a href="/quiz-stepper">
  						<button type="button" class="btn btn-outline-primary">
    						Take Quiz
  						</button>
						</a>
      			</Card.Body>
    			</Card>
				</Col>
				

				<Col>
				<Card style={{ width: '18rem' }}>
      			<Card.Img variant="top" src="src/assets/se.jpeg" />
      			<Card.Body>
        			<Card.Title>Software Engineering</Card.Title>
        			<Card.Text>
					Explore the fundamentals and best practices of software engineering to build robust and scalable applications.
        			</Card.Text>
        			
					<a href="/quiz-stepper">
  						<button type="button" class="btn btn-outline-primary">
    						Take Quiz
  						</button>
						</a>
      			</Card.Body>
    			</Card>
				</Col>
			</Row>

			
		</Container>
			
		</main>
		
	)
}

export default Home

