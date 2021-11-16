import React, { useState, useEffect, FormEvent } from "react";
import { Card } from "../../components/Card";
import { api } from "../../service/api";
import {
  Body,
  BoxExtra,
  BoxInfo,
  BoxMedium,
  BoxMini,
  Button,
  Container,
  Header,
  Info,
  Logo,
  Main,
  CreateInput,
} from "./styled";

type Car = {
  _id: string;
  modelo: string;
  marca: string;
  tipo: string;
  status: string;
};

const initialValue = {
  modelo: "",
  marca: "",
  tipo: "",
  status: "",
};

export function Home(): JSX.Element {
  const [data, setData] = useState<Car[]>();
  const [car, setCar] = useState(initialValue);

  function getData() {
    api
      .get("/car")
      .then((doc) => {
        console.log(doc.data);
        setData(doc.data);
      })
      .catch((e) => console.log(e));
  }

  function onChangeInput(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;
    const newDate = { ...car, [name]: value };
    setCar(newDate);
  }

  function createCar(ev: FormEvent) {
    ev.preventDefault();
    api
      .post("/car", car)
      .then(() => alert("Carro Cadastrado com Sucesso!"))
      .then((e) => console.error(e));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Body>
      <Container>
        <Header>
          <Logo>Loxo´s Car</Logo>
        </Header>
        <Main>
          <BoxExtra>
            <form onSubmit={createCar} className="formulario">
              <BoxInfo>
                <Info>
                  <CreateInput
                    onChange={onChangeInput}
                    type="text"
                    name="modelo"
                    placeholder="Modelo:"
                  />
                  <CreateInput
                    onChange={onChangeInput}
                    type="text"
                    name="marca"
                    placeholder="Marca:"
                  />
                  <CreateInput
                    onChange={onChangeInput}
                    type="text"
                    name="tipo"
                    placeholder="Categoria:"
                  />
                  <CreateInput
                    onChange={onChangeInput}
                    type="text"
                    name="status"
                    placeholder="Status:"
                  />
                </Info>
              </BoxInfo>
              <Button type="submit">Criar</Button>
            </form>
          </BoxExtra>
          <BoxMini>
            <Button>Econômico</Button>
            <Button>Sedan</Button>
            <Button>Standard</Button>
            <Button>SUV</Button>
            <Button>Luxo</Button>
          </BoxMini>
          <BoxMedium>
            {data?.map((i) => (
              <Card key={i._id} marca={i.marca} modelo={i.modelo} id={i._id} />
            ))}
          </BoxMedium>
        </Main>
      </Container>
    </Body>
  );
}
