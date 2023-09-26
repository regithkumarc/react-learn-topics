import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        console.log("constructor");

        this.state = {
            name : 'regith',
            count : 1
        }
    }
    
    static getDerivedStateFromProps(props,state) {
        console.log("getDerivedStateFromProps : " + state.name + " : " + props.name);
        return this;
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("shouldComponentUpdate");
        console.log(nextState.count)
        //return this.count === 2 ? false : true;
        return true;
    }

    click = () => {
        console.log("clicked")
        this.setState({name : "hello",count : this.state.count+1})
        console.log("Count : " + this.state.count)
    }

    render() {
        console.log("render");
        return (
            <div>
                <h3>App</h3>
                <button onClick={this.click}>Click</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    getSnapshotBeforeUpdate(preProps,preState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(preProps,preState,snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidCatch(error,info) {
        console.log("componentWillUnmount");
    }
}

export default App;