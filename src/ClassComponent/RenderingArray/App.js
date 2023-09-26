import React from "react";

class App extends React.Component {

    users = [
        {name:'regith',age:31},
        {name:'kumar',age:28}
    ]
    render() {
        return (
            <div>
                <h3>Rendring Array</h3>
                <p>{(this.users || []).map((x,index,usersArray) => {
                    return (
                        <div key={index}>
                            <p>{index}</p>
                            <p>{x.name}</p>
                            <p>{x.age}</p>
                        </div>
                    )
                })}</p>
            </div>
        )
    }
}
export default App;