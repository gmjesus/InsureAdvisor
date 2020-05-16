import React from 'react';
import '../App.css';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Link, useParams } from "react-router-dom";

var filteringData = function(userInputs,brokerInputs)
{
	let newArray = userInputs.filter(object=>
	{
		for(var userElement of object.InsuranceTypes)
		{
			for(var advisorElement of brokerInputs.InsuranceTypes)
			{
				if (advisorElement == userElement)
						return object;
			}
		}
	})
	return newArray;
};

var filteringPrice = function (userInputs, brokerInputs)
{
	var userStuff = filteringData(userInputs,brokerInputs);
	var num = userStuff.filter(object=> {
		if((object.MaxLimit>=brokerInputs.Range[0]) && (object.MaxLimit<=brokerInputs.Range[1]))
		{
				return object;
		}
	})
	return num;
};

var filteringCountry = function(userInputs,brokerInputs)
{
	var final = filteringPrice(userInputs,brokerInputs);
	var x = final.filter(object=>
	{
		if(object.Citizenship == brokerInputs.Citizenship ) { return object; }
		else{ return; }
	})
	return x;
};

function Matches() {
	const { id } = useParams();
	const [advisor, setAdvisor] = React.useState();
	let matches = [];
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		async function getAdvisor(){
			const temp = await axios("http://localhost:3001/advisors/" + id);	
			setAdvisor(temp.data);
		}
		async function getUsers(){
			const temp = await axios("http://localhost:3001/users");	
			setUsers(temp.data);
		}
		getAdvisor();
		getUsers();
	}, []);

	if(users == null || advisor == null) {
		return(	<h1 style={{textAlign: "center"}} className = 'matches-header'>Loading...</h1> )
	}
	else {
		matches = filteringCountry(users,advisor);
		return (
			<Container>
				<h1 style={{textAlign: "center"}} className = 'matches-header'>Your Matches</h1>
				{matches.length === 0 ? <div className = 'matches-b'><p>No matches were found</p> 
				<Button as={Link}  to="/user-form" variant="light" className='bb'>For Clients</Button></div> : ''}
				{
					matches.map((item, key) => {
						const mailto = "mailto:" + item.Email;
						return (
							<Card className = 'matches-details' key={key}>
								<Card.Body>
									<Card.Title>{item.Name}</Card.Title>
									<Row>
										<Col>
											<div className = 'matches-p'><strong>Age: </strong>{item.Age}</div>
											<div className = 'matches-p'><strong>Email: </strong><a href={mailto}>{item.Email}</a></div>
											<div className = 'matches-p'><strong>Country of Residency: </strong>{item.Citizenship}</div>
										</Col>
										<Col>
										<div className = 'matches-p'><strong>Monthly Limit: </strong>${item.MaxLimit}</div>
										<div className = 'matches-p'><strong>Insurance Types: </strong>{item.InsuranceTypes.join(', ')}</div>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						)})
				}
			</Container>
		);
	}
}

export default Matches;