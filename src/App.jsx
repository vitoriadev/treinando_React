import React from "react";
import Primeiro from "./components/primeiro";
// import ComParametro from "./components/comParametro";
// import ComFilhos from "./components/ComFilhos";
import Card from "./layout/card";

function App(props) {
  <React.Fragment>
    <Card titulo="Primeiro componente"></Card>
    <Card titulo="Conteudo"></Card>
    <Card titulo="Exercicios X">Conteudo</Card>
    <Primeiro />
    {/* <ComParametro title="Esse é o titulo" subtitle="Esse é o subtitulo" /> */}
    {/*<ComFilhos>
        <ul>
            <li>Leonardo</li>
            <li>Bruno</li>
            <li>Aline</li>
            <li>Yasmin</li>
        </ul>
    </ComFilhos>*/}
  </React.Fragment>;
}
export default App;
