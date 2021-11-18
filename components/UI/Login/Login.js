import React, { useRef, useContext } from "react";
import AuthContext from "../../../Store/auth-context";
import { useHistory } from 'react-router-dom';


import classes from "./Login.module.css";

const Login = () => {
    const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

 const AuthCtx =  useContext(AuthContext)

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCbprT56t-COs4swoq-Z6gHbSUdBcWNOB8',
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
        
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
         
            
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
          AuthCtx.login(data.idToken);
          history.replace('/items')
      }).catch((err) => {
          alert(err.message)
      })
      
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="text" name="email" placeholder="" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
