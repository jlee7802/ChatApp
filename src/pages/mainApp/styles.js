import styled from 'styled-components'

///////// Components for top navigation bar
export const NavBar = styled.nav`
	width: 85%;
    height: 4%;
    margin: 0;
    border: none;
    background-color: #12293a;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    div {
        float: left;
    }
`

// Form for SearchInput and SearchButton
export const SearchForm = styled.form`
    width: 30%;
    height: 70%;
    padding: 5;
    margin: 5;
    display: block;
    float: right;
`

export const SearchInput = styled.input`
    width: 86%;
    height: 100%;
    type: text;
    color: black;
    border: none;
    font-size: 20pt;
`

export const SearchButton = styled.button`
    height: 100%;
    width: 14%;
    type: submit;
    float: right;
    background: #ddd;
    font-size: 17px;
    border: none;
`

// Menu button in NavBar
export const NavButton = styled.button`
    height: 100%;
    type: button;   
    float: right;
    background: #ddd;
    border: none;
`

// Title of currently selected item in NavModal
export const Title = styled.div`
    float: left;
`

//////// Components for tile div (element showing tiles)

// Outermost container for Tiles
export const TileDiv = styled.div`
    height: 92%;
    width: 85%;
    background-color: red;
    border: none;
    margin: 0;
    padding: 0;
    float: right;
`

// Individual Tile components in TileDiv
export const Tile = styled.div`
    height: 15%;
    width: 10%;
    background-color: green;
    border: none;
    margin: 5px;
    padding: 0;
    float: left;
    display: table;
`

export const TileSpan = styled.span`
    display: table-cell;
    height: 100%;
    vertical-align: middle;
    text-align: center;
`

//////// Components for side modal div
export const NavModalDiv = styled.div`
    height: 100%;
    width: 15%;
    background-color: #0e1f2c;
    float: left;
    border: none;
`

export const NavUserProfile = styled.div`
    height: 10%;
    width: 100%;
    background-color: #0e1f2c;
    border: none;
`

export const NavMButton = styled.button`
    height: 10%;
    width: 50%;
    type: button;
    background-color: #0e1f2c;
    float: left;
    border-color: rgba(244, 188, 71, .9);
    color: #55c3b7;

    &:hover {
        background-color: #2b3d54;
    }
`