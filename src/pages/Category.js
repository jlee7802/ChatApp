import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import { MainDiv } from '../components/styles.js'
import TopNavBar from './mainApp/TopNavBar.js';
import { TileDiv, Tile, TileSpan } from './mainApp/styles.js';

class Category extends React.Component {
	constructor(props){
		super(props);
		this.state = {categoriesReady: false, categories: [], goToGroup: false};
	}

	componentWillMount() {
		document.body.style.margin = 0;
	}

	componentDidMount() {
		this.getAllCategory();
	}

	getAllCategory() {
		var endpoint = 'http://localhost:8060/category';
		this.fetchProc(endpoint);
	}

	fetchProc(endpoint) {
		fetch(endpoint)
		.then(response => response.json()
		.then(res => {
			if(res !== null){
				console.log(res);
				this.setState({categoriesReady: true, categories: res});
			}
		}).catch(err => {
			console.log(err)
		}));
	}

	goToGroup = () => {
		this.setState({goToGroup: true});
	}

	render(){
		if(this.state.goToGroup){
			return <Redirect to='/group' />;
		}

		const categories = this.state.categories;

		return(
			<MainDiv>
				<TopNavBar/>
				<TileDiv>
					{categories.map(category => <Tile><TileSpan onClick={this.goToGroup}>{category.categoryName}</TileSpan></Tile>)}
				</TileDiv>
			</MainDiv>
		)
	}
}

export default Category;