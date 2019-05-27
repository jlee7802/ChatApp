import React from 'react';
import { BackdropStyle, ModalStyle, NameInput, DataInput, DataList, CreateButton } from './style.js';

class CreateModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {show: false, nameValue: '', dataValue: '', data: []};	
		// Need to get top 20 groups and put them in filtered data on initial load of createModal

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({show: nextProps.show});

		var endpoint;
		switch(nextProps.listType){
			case 'Group':
				endpoint = 'http://localhost:8060/category';
				break;
			default:
				endpoint = 'http://localhost:8050/group';
		}
		this.fetchProc(endpoint);
	}

	// Fetch JSON data from endpoint using HTTP request
	fetchProc(endpoint){
		fetch(endpoint)
		.then(response => response.json()
		.then(res => {
			console.log(res);
			if(res !== null){
				this.setState({data: res});
			}
		}).catch(err => {
			console.log(err)
		}));
	}

	handleChange(event) {
		const name = event.target.name;

		this.setState({
			[name]: event.target.value
		});
	}

	render(){
		if(!this.state.show)
			return null;

		let result = [];
		if(this.state.dataValue !== '')
			result = this.state.data.filter(data => {
				if(data.name.toLowerCase().indexOf(this.state.dataValue.toLowerCase()) !== -1)
					return data.name;
			});

		const dataList = result.map(data => <div>{data.name}</div>);

		return(
          <BackdropStyle name='outer' onClick={this.props.toggleModal}>
          	<ModalStyle name='inner'>
          		<NameInput name='nameValue' placeholder='Name' onChange={this.handleChange} value={this.state.nameValue}/>
          		<DataInput name='dataValue' placeholder='group' onChange={this.handleChange} value={this.state.dataValue}/>
          		<DataList>
          		</DataList>
          		<CreateButton/>
          	</ModalStyle>
          </BackdropStyle>
		);
	}
}

export default CreateModal;