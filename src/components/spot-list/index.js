import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", {
        params: { tech },
      });

      setSpots(response.data);
    }

    loadSpots();
  }, [tech]);

  function handleNavigate(id) {
    history.push(`Book/${id}`);
  }

  return (
    <div className="container-spot">
      <label className="title">
        Empresas que usam: <span className="bold">{tech}</span>
      </label>

      <div className="list">
        {spots.map((item) => (
          <div className="listItem">
            <img className="thumbnail" src={item.thumbnail_url} alt="imagem" />
            <span className="company">{item.company}</span>
            <span className="price">
              {item.price ? `R$ ${item.price}/dia` : "Gratuito"}
            </span>

            <button
              className="button"
              type="button"
              onClick={() => handleNavigate(item._id)}
            >
              <span className="buttonText">Solicitar reserva</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpotList;
