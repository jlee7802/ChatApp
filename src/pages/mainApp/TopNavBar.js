import React from 'react';
import { NavBar, SearchForm, SearchInput, SearchButton, Title } from './styles.js';

class TopNavBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {};

	}

	handleSubmit(event) {
      this.setState({visibleInput:!this.state.visibleInput, visibleText:!this.state.visibleText});
      event.preventDefault();

      this.getUser(event.target.email.value, event.target.password.value);
    }

	goUserProfile(){
		console.log("goUser");
	}

	render(){
		return(
             <NavBar id="nav">
               <div>{this.props.title}</div>
               <SearchForm>
               	 <SearchInput placeholder="Search" />
               </SearchForm>
             </NavBar>
		);
	}
}

export default TopNavBar;