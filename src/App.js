import React from 'react';
import Counter from './components/Counter'
import Button from './components/Button'
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div className="App">
        <Counter count={this.state.count}/>
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}
