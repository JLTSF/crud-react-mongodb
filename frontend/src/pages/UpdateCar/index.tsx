import React, { useEffect, useState, FormEvent } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { Button } from "../home/styled";
import { CardInput, InputUp, Container } from "./styled";
import { api } from "../../service/api";

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

const initialValue = {
  modelo: "",
  marca: "",
  tipo: "",
  status: "",
};

export function UpdateCar(): JSX.Element {
  const [data, setData] = useState<Car>();
  const [car, setCar] = useState(initialValue);
  const { id } = useParams<DetailsParams>();
  const history = useHistory();

  function onChangeInput(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;
    const newDate = { ...car, [name]: value };
    setCar(newDate);
  }

  function updateCar() {
    api
      .put(`/car/${id}`, car)
      .then(() => {
        alert("Carro Atualizado com Sucesso!");
        history.push(`/details/${id}`);
      })
      .catch((e) => console.error(e));
  }
  function getData() {
    api.get(`/car/${id}`).then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <CardInput>
        <NavLink to="/">Voltar</NavLink>
        <form>
          <p>Marca:</p>
          <InputUp
            placeholder={data?.marca}
            onChange={onChangeInput}
            name="marca"
          ></InputUp>
          <p>Modelo:</p>
          <InputUp
            placeholder={data?.modelo}
            onChange={onChangeInput}
            name="modelo"
          ></InputUp>
          <p>Categoria:</p>
          <InputUp
            placeholder={data?.tipo}
            onChange={onChangeInput}
            name="tipo"
          ></InputUp>
          <p>Status:</p>
          <InputUp
            placeholder={data?.status}
            onChange={onChangeInput}
            name="status"
          ></InputUp>
          <Button onClick={() => updateCar()}>Atulizar</Button>
        </form>
      </CardInput>
    </Container>
  );
}
