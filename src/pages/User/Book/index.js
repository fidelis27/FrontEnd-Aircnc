import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./styles.css";

import api from "../../../services/api";

export default function Book({ navigation }) {
  const [date, setDate] = useState("");
  const history = useHistory(); 

  let { id } = useParams();

 
  async function handleSubmit() {
    const user_id = await JSON.parse(localStorage.getItem("user_customer"));

    await api.post(
      `/spots/${id}/bookings`,
      {
        date,
      },
      {
        headers: { user_id },
      }
    );

    alert("Solicitação de reserva enviada!");

    history.push("/List");
  }

  function handleCancel() {
    history.push("/list");
  }

  return (
    <div className="container-book">
      <div className="label">Data de interesse *</div>
      <input
        className="input"
        placeholder="Qual data você quer reservar?"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        type="button "
        onClick={handleSubmit}
        className="button buttonText"
      >
        Solicitar reserva
      </button>

      <button
        type="button"
        onClick={handleCancel}
        className="button cancelButton buttonText"
      >
        Cancelar
      </button>
    </div>
  );
}
