import './App.css'
import {Component} from "react"

class App extends Component{
  constructor(){
    super()
    this.state={
      counter:0
    }
  }

  increment=()=>{
    console.log('hello')
    this.setState(()=>{
      return{
        counter :this.state.counter+1
      }
    })

  }

  decrement=()=>{
    this.setState(()=>{
      return{
        counter :this.state.counter-1

      }
    })
  }

  reset=()=>{
    this.setState(()=>{
      return{
        counter :0

      }
    })

  }
    
  

  render(){
    return(
      <>
      <h1 >Counter App</h1>
      <div className="number">
      {this.state.counter}
      </div>
      <br></br>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.reset}>reset</button>
      </>
    )
  }

}

export default App
