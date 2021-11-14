import React, {useRef} from 'react';
import ForwardRef from './ForwardRef';

function ForwardRefIndex() {

    const myInputRef = useRef();

    const click = () => {
        console.log(myInputRef.current.value);
    }

    return (
        <div>
            <ForwardRef ref={myInputRef} />
            <button onClick={click}>send</button>
        </div>
    )
}

export default ForwardRefIndex;
