//reducer
import _ from 'lodash'
import { 
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
 } from '../actions'


export default (events = {} , action) => {
     switch(action.type){
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
        // console.log(action.response.data)
        return _.mapKeys(action.response.data, 'id' )
            // return state
        case DELETE_EVENT:
            console.log(action.id)
            delete events[action.id]
            return { ...events }
        default:
            return events
     }
}