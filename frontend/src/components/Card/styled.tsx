import styled from "styled-components";
import { Button } from "../../pages/home/styled";

export const CardInfo = styled.div`
  width: 10rem;
  height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: auto 0;
  background: #e51c44;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;

  ${Button} {
    background: #243189;
    margin: auto;
    margin-bottom: 1rem;
  }

  .link {
    text-decoration: none;
    color: #fff;
  }
`;
