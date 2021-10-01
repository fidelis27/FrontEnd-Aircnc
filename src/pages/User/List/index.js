import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import SpotList from "../../../components/spot-list";

import logo from "../../../assets/logo.png";
import "./styles.css";

export default function List() {
  const [techs, setTechs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const techs = JSON.parse(localStorage.getItem("techs"));

    if (!techs) {
      return history.push("/login-user");
    }

    const toArrayTech = techs.split(",");

    setTechs(toArrayTech);
  }, [history]);

  function handleLogout() {
    // localStorage.removeItem('user');
    localStorage.clear();
    alert("Você foi desconectado!");

    history.push("/login-user");
  }

  return (
    <div className="container-list">
      <div source={logo} className="logo" />
      <div>
        {techs.map((tech) => (
          <SpotList key={tech} tech={tech} />
        ))}
      </div>

      <button type="button" className="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}
