import React, { useState } from "react";
import { useAuth } from "react-uicomp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userLogin } from "../../actions/Actions";

const LoginPage = (props) => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userLogin } = props;

  const onSubmit = () => {
    userLogin(
      {
        email,
        password,
      },
      handleLogin,
    );
  };

  return (
    <>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => onSubmit()}>
        Login
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      userLogin,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
