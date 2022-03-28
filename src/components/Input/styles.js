import styled from "styled-components";

export const Container = styled.div`

  h1 {
    font-size: 38pt;
    color: rgb(255, 255, 255);
    margin-bottom: 15px;
    letter-spacing: 2px;
    text-shadow: rgb(33 33 33) 0px -6px 0px, rgb(33 33 33) 6px 0px 0px, rgb(33 33 33) -6px 0px 0px, rgb(33 33 33) 6px 0px 0px, rgb(33 33 33) -6px -6px 0px, rgb(33 33 33) 6px -6px 0px, rgb(33 33 33) -6px 6px 0px, rgb(33 33 33) 6px 6px 0px, rgb(33 33 33) -6px 8px 0px, rgb(33 33 33) 0px 8px 0px, rgb(33 33 33) 6px 8px 0px, rgb(0 0 0 / 10%) 0px 9px 1px, rgb(0 0 0 / 10%) 0px 0px 6px, rgb(0 0 0 / 30%) 0px 6px 3px, rgb(0 0 0 / 20%) 0px 2px 6px, rgb(0 0 0 / 50%) 0px 8px 8px, rgb(0 0 0 / 20%) 0px 4px 4px, rgb(0 0 0 / 50%) 0px 6px 6px;
}
  }
  input {
    height: 2.25rem;
    width: 60%;
    box-sizing: content-box;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    animation-duration: 10ms;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    background: transparent;
    color: #fff;
    font-weight: bold;
    border-color: #000;
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    margin-left: 0.2rem;
    border-color: #fff;
  }
`