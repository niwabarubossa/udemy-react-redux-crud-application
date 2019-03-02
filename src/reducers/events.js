//reducer
import _ from 'lodash'
import { READ_EVENTS } from '../actions'


export default (events = {} , action) => {
     switch(action.type){
        case READ_EVENTS:
        // console.log(action.response.data)
        return _.mapKeys(action.response.data, 'id' )
            // return state
        default:
            return events
     }
}