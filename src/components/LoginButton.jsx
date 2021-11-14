import React from 'react';

const LoginButton = (props) => {

    console.log(props);

    function login() {
        setTimeout(() => {
            props.history.push("/");
        }, 1000)
    }
    return (
        <button onClick={login}>로그인</button>
    );
};

export default LoginButton;
