import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addNewItem, completeItem, deleteItem} from './ducks/reducer.js'
import {bindActionCreators} from 'redux'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      newItems: '', 
    }
    this.userInput = this.userInput.bind(this);
  }

    userInput(e){
      this.setState({
        newItems: e.target.value,
      }) 
    }

    fuck(){
      this.props.addNewItem(this.state.newItems)
      this.setState({
        newItems: ''
      })
    }

  render() {
   
    var test = this.props.newItems.map( (e, i) => {
      return <div key={i}> <h3> {e} </h3> <button onClick={() => this.props.completeItem(e)}> COMPLETE TASK </button> <button onClick={() => this.props.deleteItem(e)}> DELETE </button></div>
    })

    
    var completed = this.props.completeItems.map( (e, i) => {
      return <div key={i}> <h3> {e} </h3> </div>
    })

    return (
      <div className="App">
          <div className='new-tasks'>
            <h1> NEW TASKS </h1>
            <input value={this.state.newItems} onChange={(e) =>  this.userInput(e)} />
            <button onClick={() => this.fuck() } disabled={!this.state.newItems} > SUBMIT </button>

            {test}
          </div>
          <div className='completed-tasks'>
            <h1> COMPLETED </h1>
            {completed}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    newItems: state.newItems,
    completeItems: state.completeItems

  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({addNewItem, completeItem, deleteItem}, dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
