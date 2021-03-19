import React from "react";
//@ts-ignore
import { Link } from 'react-router-dom';

import Container from "../components/objects/Container";
import Row from "../components/objects/Row";

import '../styles/06-components/login.scss';

const Login = () => {
  return (
    <div className="c-login u-color-neutral-100">
      <div className="c-login-bg-holder">
        <img className="c-login__bg-image" src="./logo-bg.svg" alt="Spoon+fork logo" />
      </div>
      <Row>
        <Container>
          <header className='c-login-header'>
            <h1 className="c-login-header__title">Spoon + Fork</h1>
            <p className="c-login-header__sub-title">Reserve a table at your fingertips</p>
          </header>
          <form className="c-login-form">
            <input className="c-login-form__input" placeholder="USERNAME" type="text" id="username" />
            {/* <label htmlFor="username">Username</label> */}

            <input className="c-login-form__input" placeholder="PASSWORD" type="password" id="password" />
            {/* <label htmlFor="password">Password</label> */}

            <button className="c-login-form__button u-bg-color-neutral-100 u-color-theme-500">Let's go</button>

          </form>
          <footer className="c-footer">
            Not a member? <Link to='404'>Sign up.</Link>
          </footer>
        </Container>
      </Row>
    </div>
  );
};

export default Login;
