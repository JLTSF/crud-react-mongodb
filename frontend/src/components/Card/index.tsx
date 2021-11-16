import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../pages/home/styled";
import { CardInfo } from "./styled";
// import { Miniatura } from "../Mini";

type CarProps = {
  id: string;
  marca: string;
  modelo: string;
};

export const Card = ({ marca, modelo, id }: CarProps): JSX.Element => {
  return (
    <CardInfo>
      <p>{modelo}</p>
      <p>{marca}</p>

      <Button>
        <NavLink className="link" to={`/details/${id}`}>
          Saiba Mais
        </NavLink>
      </Button>
    </CardInfo>
  );
};
