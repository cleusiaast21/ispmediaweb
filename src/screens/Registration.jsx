import React from 'react';
import './Registration.css'; 
import logo from '../../src/assets/logo.png';
import { Link } from 'react-router-dom';

export default function Login () {
  return (
    
    <div className="container">
      <div className="background-image">
        <div className="login-container">
          <div className="left-side">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="right-side">
            <div className="login-form">
              <form>
                <p className="welcome">Bem-Vindo ao ISPMEDIA!</p>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirmar password" />
                <button type="submit"><Link to="/Home">Registrar</Link></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

