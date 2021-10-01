import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../../../services/api";

import logo from "../../../assets/logo.png";
import './styles.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user_customer");

    if (JSON.parse(user)) {
      history.push("list");
    }
  }, [history]);

  async function handleSubmit() {
    const response = await api.post("/sessions", { email });

    const { _id } = response.data;

    await localStorage.setItem("user_customer",JSON.stringify(_id));
    await localStorage.setItem("techs", JSON.stringify(techs));

    history.push("list");
  }

  return (
    <div className="container-login">
      <image src={logo} />

      <div className="form">
        <div className="label">Seu E-mail *</div>
        <input
          className="input"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="label">Tecnologias *</div>
        <input
          className="input"
          placeholder="Tecnologias de interesse"
          value={techs}
          onChange={(e) => setTechs(e.target.value)}
        />

        <button className="button" onClick={handleSubmit}>
          <div className="buttonText">Encontrar spots</div>
        </button>
      </div>
    </div>
  );
}
