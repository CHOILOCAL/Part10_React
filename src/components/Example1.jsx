import React from 'react';

const Example1 = () => {
    const [state, setState] = React.useState({count: 0});

    function click() {
        setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={click}>버튼</button>
        </div>
    );
};

export default Example1;
