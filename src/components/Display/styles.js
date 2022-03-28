import styled from "styled-components";

export const Container = styled.div`
    .content {
      margin: 15px;
    }

    img {
        max-height: 100px;
        border-radius: 100%
      }

    .divider {
      border-top: 5px solid black;
      margin: 10px;
    }

    .repos, .starred {
      margin: 20px;
    }

    h3 {
      margin-top: 5rem;
      color: #fff;
    }
    
    h4 {
      color: #0095f6;
    }

    button:nth-child(1) {
      background-color: red;
      height: 2.3rem;
      width: 30%;
      color: #fff;
      font-weight: bold;
      border-radius: 6px;
    }

    button:nth-child(2) {
      background-color: green;
      height: 2.3rem;
      width: 30%;
      color: #fff;
      font-weight: bold;
      border-radius: 6px;
    }
    
`