import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/primeiro"
import ComParametro from './components/comParametro';



ReactDOM.render(
    <React.Fragment>
        <Primeiro />
        <ComParametro title="Esse é o titulo"
            subtitle="Esse é o subtitulo" />,
    </React.Fragment>
    , document.getElementById('root')
)