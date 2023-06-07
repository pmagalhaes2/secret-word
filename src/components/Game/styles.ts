import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 2.5rem;
  }

  > p {
    span {
      font-weight: bold;
    }
  }

  h3 {
    span {
      color: #ecfa00;
    }
  }

  > div:first-of-type {
    display: flex;
    margin: 1.5rem;
    padding: 2rem;
    border: 20px solid #ecfa00;

    span {
      font-size: 5rem;
      line-height: 1.5;
      border: 3px solid #000;
      min-height: 100px;
      min-width: 100px;
      text-transform: uppercase;
      padding: 1.5rem;
      background-color: #ffffff;
      color: #000;
      font-weight: bold;
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    input {
      height: 3rem;
      width: 3rem;
      font-size: 2rem;
      text-align: center;
    }
  }
`;
