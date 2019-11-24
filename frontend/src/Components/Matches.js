import React from 'react';
import '../App.css';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import {
  BrowserRouter as
  Link,
  useParams
} from "react-router-dom";

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
    var  num = userStuff.filter(object=>
    {

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

        if(object.Citizenship == brokerInputs.Citizenship )
        {
            //console.log("Match Found! Here is the User Information: ");
            return object;
        }
        else{
            return;

        }

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

	matches = filteringCountry(users,advisor);
	 
  return (
    <Container>
			<h1 style={{textAlign: "center"}} className = 'matches-header'>Your Matches</h1>
			{matches.length === 0 ? <div className = 'matches-b'><p>No matches were found</p> 
			<Button as={Link}  to="/user-form" variant="light" className='bb'>For Clients</Button></div> : ''}
      {
        matches.map((item, key) => {
					return (
						<Card key={key}>
							<Card.Body>
								<Card.Title>{item.Name}</Card.Title>
								<Row>
									<Col>
										<div><strong>Age: </strong>{item.Age}</div>
										<div><strong>Email: </strong>{item.Email}</div>
										<div><strong>Country of Residency: </strong>{item.Citizenship}</div>
									</Col>
									<Col>
										<div><strong>Monthly Limit: </strong>${item.MaxLimit}</div>
										<div><strong>Insurance Types: </strong>{item.InsuranceTypes.join(', ')}</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					)})
      }
    </Container>
  );
}

export default Matches;