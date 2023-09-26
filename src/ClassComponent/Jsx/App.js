import React from "react";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            name :'regith'
        };
        this.normalFunction = this.normalFunction.bind(this)
    }

    normalFunction () {
        //console.log(this.state.name)
        this.setState({name:'tt'})
    }

    
    arrowFunction = () => {
        //console.log(this.state.name)
        this.setState({name:'tt'})
    }

    render() {
        return(
            <div>
                <h3>App</h3>
                <button onClick={this.normalFunction}>NormalFunction</button>
                <button onClick={this.arrowFunction}>ArrowFunction</button>
                <p>{this.state.name}</p>
            </div>
        )
    }
}
export default App;