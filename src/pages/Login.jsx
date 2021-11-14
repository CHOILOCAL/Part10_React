import React from 'react';
import LoginButton from "../components/LoginButton";

const Login = (props) => {

    // function login() {
    //     setTimeout(() => {
    //         props.history.push("/");
    //     }, 1000);
    // }
    return (
        <div>
          <h2>Login 페이지 입니다.</h2>
            <LoginButton {...props} />
          {/*<button onClick={login}>로그인</button>*/}
        </div>
    );
};

export default Login;
