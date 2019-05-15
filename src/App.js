import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

 constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.handleClick = this.handleClick.bind(this);

  };

	
	 handleClick() {
   var amount   =document.getElementById('amount').value;
   var dolAmount=0;
   var dolAmount2=0;
   if(amount > 100)
   {
	   dolAmount= amount % 100;
   }
   if(amount > 50)
   {
	   var reminder= amount% 50;
	    dolAmount2=amount-50-reminder;
   }
   
   var totalAmount= (dolAmount * 2) + (dolAmount2)
   
    this.setState({data: totalAmount})
  }
	
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
		<input type="text" id="amount" /> 
		
		<button onClick={this.handleClick}> Calculate Points </button>
		
		<p> { this.state.data } </p>
		
		
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
	
);
}
}

export default App;
