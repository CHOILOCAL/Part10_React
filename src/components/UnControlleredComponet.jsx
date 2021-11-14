import React, {Component} from 'react';

class UnControlleredComponet extends Component {

    inputRef = React.createRef();

    render() {
        console.log(`initial render`, this.inputRef);
        return (
            <div>
                {/*<input id="my-input" />*/}
                <input ref={this.inputRef} />
                <button onClick={this.click}>전송</button>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount', this.inputRef);
    }

    click = () => {
        // input Element의 현재 상태 값 (value)를 꺼내서 전송한다.
        // const input = document.querySelector("#my-input");
        // console.log(input.value);
        console.log(this.inputRef.current.value);
    }
}

export default UnControlleredComponet;
