import React from 'react';

const Example3 = () => {
    const [count, setCount] = React.useState({count: 0});

    React.useEffect(() => {
        console.log(`componentDidMount`);

        return () => {
            // clean up
            // componentWillUnmount
            console.log('clickup by count', count);
        };
    }, []);

    React.useEffect(() => {
        console.log(`componentDidMount & componentUpdate by count`, count);
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );
};

export default Example3;
