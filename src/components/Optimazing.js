import React from 'react';

const Optimazing = React.memo(({name, age}))
=>
{

    console.log(`Person render`);

    return (
        <div>
            {name} / {age}
        </div>
    );
}
;

export default Optimazing;

function Opt() {
    const [state, setState] = React.useState({
        text: "",
        persons: [
            {id: 1, name: "Mark", age: 10},
            {id: 1, name: "Hana", age: 20},
            {id: 1, name: "CHoi", age: 30},
        ]
    });

    const {text, persons} = state;

    const _change = (e) => {
        setState({
            ...state,
            text: e.target.value,
        })
    }

    const toPersonClick = useCallback(() => {}, []);

    return (
        <div>
            <input type="text" value="text" onChange{_change} />
            <ul>
                {persons.map((person) => {
                    return (
                        <Optimazing
                            {...person}
                            key={person.id}
                            onClick={toPersonClick}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Opt;
