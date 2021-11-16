import styled from "styled-components";
import { Button } from "../home/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ddd;
`;

export const CardInput = styled.div`
  margin: 0 3rem;
  width: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  background: #c9c9c9;
  padding: 1rem;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Lucida Grande", Helvetica, Arial, sans-serif;

  ${Button} {
    background: #243189;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

export const InputUp = styled.input`
  width: 15rem;
  height: 3rem;
  margin: 0 auto;
`;
