import {Component} from "react"

class Calculator extends Component{
  state = {count:0}
  onInput= (event) =>{
    const lengthVal = event.target.value.length;
    this.setState(() => ({count:lengthVal}));
  }
  
  render(){
    const {count} = this.state
    return(
      <div className= "bg-container">
        <div className="cal-card">
          <h1 className="cal-heading">Calculate the letters you enter</h1>
          <label className="cal-label">Enter the phrase</label>
          <input type="text" className="cal-input" onChange={this.onInput}/>
          <div className="count-card">
            <p className="count-val">No of Letters: <span>{count}</span></p>
          </div>
        </div>
        <div className="img-card">
          <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="calculatorImage" className="cal-img"/>
        </div>
      </div>
    )
  }
}

export default Calculator