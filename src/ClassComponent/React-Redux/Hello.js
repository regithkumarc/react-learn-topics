import React from "react";
import { connect } from "react-redux";
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./Store";

let Hello = (props) => {
    return (
        <div>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <h3>{props.name} {props.count}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count : state.counter.count
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        increment : () => {
            dispatch({type: COUNTER_INCREMENT})
        },
        decrement : () => {
            dispatch({type: COUNTER_DECREMENT})
        }
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Hello);