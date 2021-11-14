import React from "react"

export default React.forwardRef(function ForwardRef(props, ref) {

    return (
        <div>
            <p>MyInput</p>
            <input ref={ref} />
        </div>
    )
})
