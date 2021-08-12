import React, {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'

console.log({AppContext})

export const App = () => {
  
  const [state, dispatch] = useReducer(reducer, [])
  
  return (
    <AppContext.Provider value={'HELLO Provider'}>
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
      
    </div>
    </AppContext.Provider>
  );
}


