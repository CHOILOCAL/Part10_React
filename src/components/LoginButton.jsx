import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginButton = (props) => {

    console.log(props);

    const history = useHistory();
    console.log('history = ' + history);

    function login() {
        setTimeout(() => {
            // props.history.push("/");
            history.push("/");
        }, 1000)
    }
    return (
        <button onClick={login}>로그인</button>
    );
};

export default LoginButton;
