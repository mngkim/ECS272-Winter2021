import React from 'react';
import ScatterChart from './ScatterChart';
//import data from  './datasets/SF_Historical_Ballot_Measures.csv';
import data from './datasets/merge_df.csv';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      id: "chart-1"
    }
  }

  render() {
    return (
      <div className="App">
        <h2> Military Expenditure and GDP By Year </h2>
        <div id="slider">
          <label for="nyears"> Year = <span id="nyears-value">...</span> </label>
          <input id="nyears" type="range" name="years" min="1960" max="2018"></input>
          <button type="button" id="start">start</button>
          <button type="button" id="stop">stop</button>
        </div>

        <div id="container">
          <div id="tooltip"></div>
        </div>
        <div id="box"></div>
        <ScatterChart data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
    );
  }

}

export default App;
