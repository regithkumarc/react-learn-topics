import React, { useEffect }  from 'react';
import AxiosAPI from './AxiosAPI';

const UseEffectExample = () => {

    useEffect(() => {
        AxiosAPI.getAllProducts().then(res => {
            console.log("UseEffect 1", res.data)
        }).catch(function(error) {
            console.log(error)
        }).then(function () {
            console.log('always')
        })

    //     fetch(
    //         AxiosAPI.getAllProducts()                                                
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         }).catch(error => console.error(error))
    // )
    },[])

    useEffect(() => {
        AxiosAPI.getAllProducts().then(res => {
            console.log("UseEffect 2", res.data)
        }).catch(function(error) {
            console.log(error)
        }).then(function () {
            console.log('always')
        })
    },[])

    useEffect(() => {
        AxiosAPI.getAllProducts().then(res => {
            console.log("UseEffect 3", res.data)
        }).catch(function(error) {
            console.log(error)
        }).then(function () {
            console.log('always')
        })
    },[])


    return (
        <div>
            <p>hello</p>
        </div>
    );
};

export default UseEffectExample;