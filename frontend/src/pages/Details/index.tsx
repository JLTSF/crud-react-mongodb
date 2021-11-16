import React, { useState, useEffect } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { BoxDetails, Container } from "./styled";
import { api } from "../../service/api";
import { Button } from "../home/styled";

type Car = {
  _id: string;
  modelo: string;
  marca: string;
  tipo: string;
  status: string;
  __v: number;
};

type DetailsParams = {
  id: string;
};

export function DetailsCar(): JSX.Element {
  const [data, setData] = useState<Car>();
  const { id } = useParams<DetailsParams>();
  const history = useHistory();

  function getData() {
    api.get(`/car/${id}`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }

  function deleteUser() {
    api.delete(`/car/${id}`).then(() => {
      alert("Você apagou com sucesso!");
      history.push("/");
    });
  }

  function editUser() {
    history.push(`/update/${id}`);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!id) {
    alert("Este Carro não existe!");
    history.push("/");
  }

  if (!data) {
    return (
      <Container>
        <BoxDetails>
          <p>Erro com a conexão do servidor!</p>
        </BoxDetails>
      </Container>
    );
  }

  return (
    <Container>
      <BoxDetails>
        <NavLink to="/">Voltar</NavLink>
        <p>Marca: {data.marca}</p>
        <p>Modelo: {data.modelo}</p>
        <p>Tipo: {data.tipo}</p>
        <p>Status: {data.status}</p>
        <Button onClick={() => deleteUser()}>Deletar</Button>
        <Button onClick={() => editUser()}>Editar</Button>
      </BoxDetails>
    </Container>
  );
}
