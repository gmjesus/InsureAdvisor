import React from 'react';
import '../App.css';
import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

function ReturnData() {
  return (
    <Container>
      <div style={{margin: "auto" }} className = 'returnD'>

      <h1 class = 'return-header'>Return Data</h1>
      <div className = 'return-details'>
      <p>Name: </p>
      <p>Email: </p>
      <p>Age: </p>
      <p>Citizenship: </p>
      <p>MaxLimit: </p>
      </div>
        </div>
    </Container>
  );
}

export default ReturnData;

let array = [
	{
		"InsuranceTypes": [
			"Property",
			"Disability",
			"Social"
		],
		"_id": "5dd9b3340750950b40dc348e",
		"Name": "Jesus Garcia Moreno",
		"Email": "jesus2208f@gmail.com",
		"Age": 19,
		"Citizenship": "Canada",
		"MaxLimit": 500,
		"__v": 0
	},
	{
		"InsuranceTypes": [
			"Property",
			"Fire"
		],
		"_id": "5dd9b98a0750950b40dc348f",
		"Name": "Bobby",
		"Email": "bobbyf@gmail.com",
		"Age": 28,
		"Citizenship": "Canada",
		"MaxLimit": 200,
		"__v": 0
	},
	{
		"InsuranceTypes": [
			"Health and Dental",
			"Other"
		],
		"_id": "5dd9b9db0750950b40dc3490",
		"Name": "Dave Han",
		"Email": "dava@gmail.com",
		"Age": 19,
		"Citizenship": "United States",
		"MaxLimit": 900,
		"__v": 0
	}
];

for (i = 0; i < array.length; i++){
	console.log(array[i].Name);
}