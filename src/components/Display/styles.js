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
      border-top: 5px solid var(--white);
      margin: 10px;
    }

    .repos, .starred {
      margin: 20px;
    }

    h3 {
      margin-top: 5rem;
      color: var(--white);
    }
    
    h4 {
      color: var(--white);
    }

    button:nth-child(1) {
      background-color: #C73E3E;
      height: 2.3rem;
      width: 30%;
      color: var(--white);
      font-weight: bold;
      border-radius: 6px;
    }

    button:nth-child(2) {
      background-color: #50CF83;
      height: 2.3rem;
      width: 30%;
      color: var(--white);
      font-weight: bold;
      border-radius: 6px;
    }
    
`