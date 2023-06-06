import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  function handleClick() { //Een functie kan meerdere dingen tegelijk, in plaats van een enkele callback met () =>
    login();
  }
  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>
        <button
          type="button"
          onClick={ handleClick }
        >
          Log in
        </button>
        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Registreren
        </button>
      </div>
    </nav>
  );
}

export default NavBar;