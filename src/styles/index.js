import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --light-solid: #FFFFFF;
        --light-high: rgba(255, 255, 255, 0.80);
        --dark-low: rgba(0, 0, 0, 0.44);
        --dark-medium: rgba(0, 0, 0, 60);
        --dark-high: rgba(0, 0, 0, 0.80);
        --magenta: #e63888;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        height: 100vh;
        z-index: 4000;
        margin: 0;    
        padding: 0;    
        font-family: sans-serif;    
        transition: all 0.25s linear;
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    button:hover, a:hover  {
        filter: brightness(90%);
    }

    a {
        color: #fff;
    }
`