import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'

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
          <input className="form-control" id="formEventBody" value={body} />
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成</button>
        <button className="btn btn-danger" onClick={addEvent}>全てのイベントを削除</button>
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
      </table>
    </div>
  );
}


