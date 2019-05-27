import styled from 'styled-components'

export const OuterDiv = styled.div`
	height: 96%;
    width: 85%;
    background-color: black;
    opacity: .9;
    border: none;
    float: right;
`

export const MessageList = styled.div`
	height: 93%;
	width: 100%;
	position: relative;
`

export const MessageDiv = styled.div`
	height: 6%;
	width: 100%;

	&:hover {
		background-color: red;
	}

	* {
		float: left;
		padding: 0;
		margin: 0;
		color: #f4bc47;
	}

	.imgDiv {
		height: 100%;
		width: 5%;

		img {
			height: 100%;
			width: 100%;
		}
	}

	.name {
		background-color: black;
		height: 50%;
		width: 95%; 
	}

	.content {
		background-color: black;
		height: 50%;
		width: 95%;
		color: white;
	}
`
export const InputDiv = styled.div`
	height: 7%;
	width: 100%;
	float: left;
	border: none;
	position: relative;

	input {
		height: 50%;
		width: 95%;
		type: text;

		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;

		max-height: 100%;
		max-width: 100%;
		overflow: auto;
	}
`