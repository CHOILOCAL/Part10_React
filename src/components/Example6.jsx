import React, {useState, createRef, useRef} from 'react';

export default function Example6() {

    const [value, setValue] = useState('');
    const input1Ref = createRef(); // controlled
    const input2Ref = useRef(); // uncontrolled, re-rendering 되도 값이 초기화 되지 않는다

    console.log(input1Ref.current, input2Ref.current)

    return (
        <div>
            <input value={value} onChange={change}/>
            <input ref={input1Ref} />
            <input ref={input2Ref} />
        </div>
    );

    function change(e) {
        setValue(e.target.value);
    }
};

