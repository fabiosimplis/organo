import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario";

function App() {

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    // espalha o array de colaboradores e adiciona um novo colaborador
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </>
  );
}

export default App;
