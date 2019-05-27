import React from 'react';
import { Redirect } from 'react-router-dom';
import { CenterForm, MainDiv, CenterInput, CenterSubmit, Button } from '../components/styles.js'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {positionArr: [], innerCircleArr1: [], innerCircleArr2: [], innerCircleArr3: [],
      innerCircleArr4: [], email:"", password:"", visibleInput: true, visibleText: false, isLoggedIn: false, goToRegister: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mainBackground = React.createRef();
    this.circle1 = React.createRef();
  }

  componentDidMount(){
    var arrCircle = [];
    var cArr1 = [], cArr2 = [], cArr3 = [], cArr4 = [];
    for(var i = 0; i < 4; ++i){
      var top = Math.random() * this.mainBackground.current.offsetHeight;
      var left = Math.random() * this.mainBackground.current.offsetWidth;
      arrCircle.push({top: top, 
        left: left});

      var prop = {};
      var factor = 0;

      for(var j = 0; j < 5; ++j){
        prop = {class: 'circleAnimation',
        style: {top: 0,
        left: 0,
        height: 5 + factor,
        width: 5 + factor,
        animationDelay: j + 's'}};

        const elem = React.createElement('div', prop);

        switch(i){
          case 1:
            cArr1.push(elem); 
            break;
          case 2:
            cArr2.push(elem);
            break;
          case 3:
            cArr3.push(elem);
            break;
          default:
            cArr4.push(elem);
        }

        factor += 5;
      }
    }

    this.setState({positionArr: arrCircle}); // Make this all one set state
    this.setState({innerCircleArr1: cArr1});
    this.setState({innerCircleArr2: cArr2});
    this.setState({innerCircleArr3: cArr3});
    this.setState({innerCircleArr4: cArr4});
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      [name]: value
    });
  }

  // Method to initialize animation after pressing submit button, make submit button transparent
  // then put background animation to make it look like a white star, after they press it
  // the white star disappears and the lights appear in the background
  handleSubmit(event) {
    this.setState({visibleInput:!this.state.visibleInput, visibleText:!this.state.visibleText});
    event.preventDefault();

    this.getUser(event.target.email.value, event.target.password.value);
  }

  // function to check if user exists in database, if not then will notify user
  getUser(email, pw){
    return fetch('http://localhost:8080/user/' + email + '/' + pw).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })).then(res => {
        if(res.data !== -1){
          this.setState({isLoggedIn: true});
        }
    }).catch(err => {
        // return component to say the pw was incorrect to the center form
        console.log(err)
    }));
  }

  // arrow function to redirect user to register page
  goToRegister = () =>{
    this.setState({goToRegister: true});
  }

  render() {
    const innerCir1 = this.state.innerCircleArr1;
    const innerCir2 = this.state.innerCircleArr2;
    const innerCir3 = this.state.innerCircleArr3;
    const innerCir4 = this.state.innerCircleArr4;
    const isLogged = this.state.isLoggedIn;
    const goRegister = this.state.goToRegister;

    if(isLogged){
      return <Redirect to="/dashboard" />;
    }

    if(goRegister){
      return <Redirect to="/register" />;
    }

    return (
      <MainDiv ref={this.mainBackground}>
        <div id= "cir" class="circle" ref={this.circle1} style={this.state.positionArr[0]}>
          {innerCir1.map(cir => <div> {innerCir1} </div>)}
        </div>
        <div class="circle" style={this.state.positionArr[1]}>
          {innerCir2.map(cir => <div> {innerCir2} </div>)}
        </div>
        <div class="circle" style={this.state.positionArr[2]}>
          {innerCir3.map(cir => <div> {innerCir3} </div>)}
        </div>
        <div class="circle" style={this.state.positionArr[3]}>
          {innerCir4.map(cir => <div> {innerCir4} </div>)}
        </div>

        <CenterForm onSubmit={this.handleSubmit}>
          <CenterInput name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          <CenterInput name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <CenterSubmit type="submit" value="Login" />
          <Button type="button" onClick={this.goToRegister}>Register</Button>
        </CenterForm>
      </MainDiv>
    );
  }
}

export default Login;
