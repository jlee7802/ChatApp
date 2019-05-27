import styled from 'styled-components'

export const CenterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  border: none;
  background: transparent;
`
export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: white;
  padding: 0;
  margin: 0;
  border: none;
`
export const CenterInput = styled.input`
  name: ${props => props.name};
  type: text;
  placeholder: ${props => props.placeholder};
  value: ${props => props.value};
  background: rgb(77, 77, 77, 0.3);
  color: White;
  font-size: 40pt;
  margin-bottom: 5px;
  border: none;
  outline: none;
  height: 110px;
  width: 800px;
  border-radius: 60px;
  text-align: center;
  opacity: 1;
  transition: width 1s, height 1s, opacity 1s 1s;
`
export const CenterSubmit = styled.input`
  type: submit;
  background: rgb(77, 77, 77, 0.3);
  color: White;
  font-size: 40pt;
  margin-bottom: 5px;
  border: none;
  outline: none;
  height: 110px;
  width: 800px;
  border-radius: 60px;
  text-align: center;
  opacity: 1;
  transition: width 1s, height 1s, opacity 1s 1s;
`

export const Button = styled.button`
  type: button;
  background: rgb(77, 77, 77, 0.3);
  color: White;
  font-size: 40pt;
  margin-bottom: 5px;
  border: none;
  outline: none;
  height: 110px;
  width: 800px;
  border-radius: 60px;
  text-align: center;
  opacity: 1;
  transition: width 1s, height 1s, opacity 1s 1s;
`