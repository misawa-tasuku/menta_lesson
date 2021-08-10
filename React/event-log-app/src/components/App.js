import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import Event from './Event'

export const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addEvent = (e) => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvent = (e) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除しても良いですか?')
    if (result) dispatch( {type: 'DELETE_ALL_EVENTS'} )
  }

  const unCreatable = title === '' || body === '' 
  
  return (
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <input className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.length === 0} >全てのイベントを削除</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          
        </tbody>
      </table>
    </div>
  );
}


