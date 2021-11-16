import styled from "styled-components";
import { Mini } from "../../components/Mini/styled";

export const Body = styled.body`
  background: #1b2565;
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Header = styled.div`
  width: 81rem;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  background: #e51c44;
  border-radius: 1rem;
`;

export const Logo = styled.h1`
  margin-left: 1rem;
  color: #f4f4f4;
  font-family: "Impact", sans-serif;
`;

export const Button = styled.button`
  margin: auto 0;
  margin-bottom: 2rem;
  align-items: center;
  background-color: #0a66c2;
  border: 0;
  border-radius: 2rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  justify-content: center;
  line-height: 1.3rem;
  max-width: 10rem;
  min-width: 0px;
  max-height: 2rem;
  min-height: 2rem;
  overflow: hidden;
  padding: 0;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  text-align: center;
  vertical-align: middle;

  &.link {
    text-decoration: none;
    color: white;
  }
`;

export const Main = styled.div`
  width: 81rem;
  height: 30.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    "BoxExtra BoxExtra BoxMini BoxMini BoxMini"
    "BoxExtra BoxExtra BoxMedium BoxMedium BoxMedium"
    "BoxExtra BoxExtra BoxMedium BoxMedium BoxMedium"
    "BoxExtra BoxExtra BoxMedium BoxMedium BoxMedium"
    "BoxExtra BoxExtra BoxMedium BoxMedium BoxMedium";
`;

export const BoxInfo = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  margin-top: 1.5rem;
  background: #1b2565;
  border-radius: 1rem;

  ${Mini} {
    margin-top: 1rem;
    width: 13rem;
    height: 13rem;
  }
`;

export const Info = styled.div`
  width: 20rem;
  height: 20rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxExtra = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: BoxExtra;
  background: #243189;
  border-radius: 1rem;
  ${Button} {
    margin: auto;
    margin-right: 1.5rem;
  }
`;
export const BoxMini = styled.div`
  display: flex;
  align-items: center;
  grid-area: BoxMini;
  background: #243189;
  border-radius: 1rem;
  ${Button} {
    margin: 0 auto;
  }
`;
export const BoxMedium = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  grid-area: BoxMedium;
  background: #243189;
  border-radius: 1rem;
  overflow-y: scroll;
`;

export const CreateInput = styled.input`
  width: 15rem;
  height: 3rem;
  margin: 0 auto;
  background: #c9c9c9;
  border: none;
  padding: 1rem;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Lucida Grande", Helvetica, Arial, sans-serif;
`;
