import React from "react";


class Counter extends React.Component{
   

    constructor(props){
        super(props)

        this.state = { count: 0}
        this.add = this.add.bind(this)
    }

    componentDidMount(){
        this.setState(JSON.parse(localStorage.getItem('state')))
    }

    // componentWillUnmount(){

    // }

    add(){
        this.setState((state) => {return {count: state.count +1}},() =>{
            console.log(this.state)
            localStorage.setItem('state', JSON.stringify(this.state))
        })

    }

    render(){ 
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                {/* <button onClick={this.reset}>Resetar</button> */}
            </div>
        )
    }
}

export default Counter


    // shouldComponentUpdate(){
    //     // return true;
    //     return false;
    // }