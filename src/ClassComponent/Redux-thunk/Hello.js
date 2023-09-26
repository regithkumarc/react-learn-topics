import React from "react";
import { connect } from "react-redux";
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./Store";
import AxiosAPI from "./AxiosAPI";

let Hello = (props) => {

    return (
        <div>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <h3>{props.name} {props.count}</h3>
            <button onClick={props.getData}>Get Data</button>
            <button onClick={props.removeData}>Remove Data</button>
        </div>
    )
}

const separateGet = (name) => {
    return (dispatch,getState) => {
        AxiosAPI.getAllProducts().then((res) => {
            this.setState({ product : res.data });
           console.log(this.state.product);
        }).catch(function(error) {
            console.log(error)
        }).then(function() {
            console.log("fetched always")
        });
    }
}

const mapStateToProps = (state) => {
    return {
        count : state.counter.count,
        product : state.storage.data || []
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        increment : () => {
            dispatch({type: COUNTER_INCREMENT})
        },
        decrement : () => {
            dispatch({type: COUNTER_DECREMENT})
        },
        getData : () => {
            dispatch(separateGet)
        },
        removeData : () => {
            dispatch({type : 'removeData'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Hello);