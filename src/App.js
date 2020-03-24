import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import './App.css';
import Starships from './components/Starships';
import Header from './components/layout/Header';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    starships: [
    ],
    current: 'https://swapi.co/api/starships/',
    next: '',
    previous: ''

  }
  getButtonDivStyle = () => {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
}
  componentDidMount() {
    axios.get(this.state.current).then(
      res => this.setState({
        starships: res.data.results,
        next: res.data.next,
        previous: res.data.previous
      }))
  }

  onClickNext = (e) => {
    this.setState({
        current: this.state.next}, () => {
            axios.get(this.state.current).then(
              res => this.setState({
                starships: res.data.results,
                next: res.data.next,
                previous: res.data.previous
              }))
          });

    console.log(this.state.current)
  };

  onClickPrevious = (e) => {
    this.setState({
        current: this.state.previous}, () => {
            axios.get(this.state.current).then(
              res => this.setState({
                starships: res.data.results,
                next: res.data.next,
                previous: res.data.previous
              }))
          });

    console.log(this.state.current)
  };

  render () {
    let previousButton
    if(this.state.previous === null) {
      previousButton = ''
    } else {
      previousButton = <button type="button" className="btn btn-info"  onClick={this.onClickPrevious}>Previous</button>
    }
    let nextButton
    if(this.state.next === null) {
      nextButton = ''
    } else {
      nextButton = <button type="button" className="btn btn-info" onClick={this.onClickNext}>Next</button>
    }
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Starships starships={this.state.starships}/>
              </React.Fragment>
            )} />
              <div style={this.getButtonDivStyle()}>
                {previousButton}
                <div style={{width: "10px", height: "auto", display: "inline-block"}}></div>
                {nextButton}
              </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
