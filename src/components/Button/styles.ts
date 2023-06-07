import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    color: #ffffff;
    background-color: #1646a0;
    padding: 0 3rem;
    border: 2px solid #ffffff;
    border-radius: 1.5rem;
    height: 3rem;
    text-transform: uppercase;
    font-weight: bold;
    font-weight: 1.2rem;
    transition: 0.4s;

    :hover {
      background-color: #0923af;
    }
  }
`;
0