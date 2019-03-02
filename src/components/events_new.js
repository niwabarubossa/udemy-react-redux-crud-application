import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Field, reduxForm } from 'redux-form'

// import { postEvent } from '../actions'
import { dispatch } from 'rxjs/internal/observable/pairs';

import { Link } from 'react-router-dom'
class EventsNew extends Component {
  
    renderField(field){
        const { input, label, type, meta: {touched, error} } = field
        return (<div></div>)
    }

  render() {
    return (
        <form>
            <div>
                <field label="Title" name="title" type="text" component={this.renderField} />
                <field label="Body" name="body" type="text" component={this.renderField} />

            </div>

            <div>
                <input type="submit" value="Submit" disabled={false} />
                <Link to="/" >Cancel</Link>
            </div>
        </form>
    );
  }
}

const validate = values => {
    const errors = {}

    return errors
}

export default connect(null, null)(
    reduxForm({ validate, form: 'eventsNewForm' })(EventsNew)
)
