import React from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';
import { CenterInput, MainDiv, CenterForm, CenterSubmit } from '../components/styles.js'

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {isValid: false, firstName: "", lastName: "", email: "", password: "", isRegistered: false};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
      	[name]: value,
      	[name]: value
      });
  	}

  	handleSubmit(event){
  	  event.preventDefault();
  	  this.insertUser();
  	}

  	// function to insert new user into user table
  	insertUser(){
  	  var registerObj = {
  	  	firstName: this.state.firstName,
  	  	lastName: this.state.lastName,
  	  	email: this.state.email,
  	  	password: this.state.password
  	  };

  	  return fetch('http://localhost:8080/register',{
  	  	method: 'post',
  	  	headers: {
  	  		'Accept': 'application/json',
  	  		'Content-Type': 'application/json'
  	  	},
  	  	body: JSON.stringify(registerObj)
  	  }).then(res=>{
  	  	 if(res.status === 200){
  	  	 	this.setState({isRegistered: true});
  	  	 }
  	  }).catch(err => {
  	  	  console.log(err)
  	  });
  	}

	render(){
		const goLogin = this.state.isRegistered;

		if(goLogin){
		  return <Redirect to="/" />;
		}

		return(
			<MainDiv>
			<CenterForm onSubmit={this.handleSubmit}>
				<CenterInput name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
				<CenterInput name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
				<CenterInput name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
				<CenterInput name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
				<CenterSubmit type="submit" value="Register" />
			</CenterForm>
			</MainDiv>
		);
	}
}

export default Register;