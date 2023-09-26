import React from "react";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            condition : 1,
            flag : true
        }
    }

    updateData = () => {
        this.setState({condition : 2})
    }

    render() {
        let dynamicData = this.state.condition === 1 ? <div>Data 1</div> : <div>Data 2</div>

        let dynamicValidation = null;

        if(this.state.condition===1) {
            dynamicValidation = <div>Condition {this.state.condition}</div> 
            console.log("1")
        } else if(this.state.flag) {
            dynamicValidation = <div>Flag is {this.state.flag}</div>
            console.log("2")
        }

        return(
            <div>
                <h3>Conditional Rendeing</h3>
                <p>{dynamicData}</p>
                <p>{dynamicValidation}</p>
                <button onClick={this.updateData}>Conditional Rendring</button>
            </div>
        )
    }
}
export default App;