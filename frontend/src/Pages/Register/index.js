// ─── IMPORT ─────────────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import "./style.css";
import logoImg from "../../Assets/logo.svg";

// ─── INDEX ──────────────────────────────────────────────────────────────────────

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      console.log(data);
      const response = await api.post("ongs", data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (err) {
      alert(`Erro no cadastro ! ${err}`);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Be The Hero" />

          <h1> Cadastro </h1>
          <p>
            {" "}
            Faça seu cadastro, entre na plataforma e ajude pessoas a apoiarem a
            causa da sua ONG.{" "}
          </p>

          <Link className="back-link" to="/">
            {" "}
            <FiArrowLeft size={16} color="#e02041" /> Já tenho Cadastro{" "}
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da Ong"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <button className="button"> Cadastrar </button>
        </form>
      </div>
    </div>
  );
}
