import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement} from '../actions'
import { dispatch } from 'rxjs/internal/observable/pairs';

class App extends Component {

  constructor(props){
    super(props)
    // this.state = { count: 0 }
  }

  // handlePlusButton = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }

  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1 })
  // }
  
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>count: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;