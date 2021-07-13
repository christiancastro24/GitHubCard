import styled from "styled-components"

export const ButtonBlue = styled.button `
    width: 9rem;
    border: none;
    background-color: #0095F6;
    margin-top: 1rem;
    height: 3rem;
    font-weight: bold;
    margin: 1rem;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
`

export const ButtonRed = styled(ButtonBlue) `
    background-color: red;
`

export const ChangeInput = styled.input `
    height: 2rem;
    width: 19.5rem;
    border-radius: 10px;
   font-size: 1rem;
`