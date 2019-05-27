import styled from 'styled-components'

//////////// Components for Chat and Group Div in side nav bar
export const OuterDiv = styled.div`
	height: 70%;
    width: 100%;
    float: left;
    overflow: visible;
`
export const ChatTitleDiv = styled.div`
	height: 10%;
	width: 100%;
	background-color: black;
	color: #55c3b7;
	float: top;
	display: flex;
  	align-items: center;
  	justify-content: center;

  	&:hover {
  		background-color: #2b3d54;
  	}
`

export const GroupTitleDiv =styled.div`
	height: 10%;
	width: 100%;
	background-color: black;
	color: #55c3b7;
	float: top;
	display: flex;
  	align-items: center;
  	justify-content: center;

  	&:hover {
  		background-color: #2b3d54;
  	}
`

export const NMGroupDiv = styled.div`
	height: 50%;
    width: 100%;
    background-color: #0e1f2c;
    float: left;
`

export const NMChatDiv = styled.div`
	height: 50%;
    width: 100%;
    background-color: #0e1f2c;
    float: left;
`

export const ListItem = styled.div`
	background-color: #0e1f2c;
	color: white;

	&:hover {
  		background-color: #2b3d54;
  	}
`

///////////// Components for CreateModal (When user creates new chat or group)
export const BackdropStyle = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55,55,55,0.7);
    height: 100vh; 
    width: 100vw;
    z-index: 9999999;
`

export const ModalStyle = styled.div`
	position: relative;
    background-color: #0e1f2c;
    border-radius: 5;
    width: 60%;
    height: 80%;
    left: 20%;
    top: 10%;
`

export const NameInput = styled.input`
	name: ${props => props.name};
	type: text;
	placeholder: ${props => props.placeholder};
	value: ${props => props.value};
	position: absolute;
	top: 5%;
	left: 10%;
`

export const DataInput = styled.input`
	position: absolute;
	type: text;
	placeholder: ${props => props.placeholder};
	value: ${props => props.placeholder};
	top: 10%;
	left: 10%;
	width: 10%;
`

export const DataList = styled.div`
	position: absolute;
	top: 15%;
	left: 10%;
	width: 60%;
	height: 60%;
	background-color: green;
`

export const CreateButton = styled.button`
	position: absolute;
	top: 5%;
	left: 30%;
	width: 3%;
	height: 3%;
`