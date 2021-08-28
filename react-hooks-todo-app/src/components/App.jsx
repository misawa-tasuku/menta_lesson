import React, {useReducer, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Todo from './Todo'

const App = () =>  {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addTodo = e => {
    e.preventDefault()//画面のリロード防ぐ
    dispatch({
      type: 'CREATE_TODO',
      title,
      body,
    })
    setTitle('')
    setBody('')
  }



  const deleteTodo = () => {

  }
  return (
    // JSXだとclassName
    <div className="container-fluid">
      <h4>TODO作成フォーム</h4> 
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="form-control" id="formEventTitle" value={title} 
          onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <input type="form-control" id="formEventBody" value={body}
          onChange={e => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addTodo}>TODO作成</button>
        <button className="btn btn-danger" onClick={deleteTodo}>全てのTODOを一括削除</button>
      </form>
      <h4>TODO一覧</h4>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((todo, index)=> (<Todo key={index} todo={todo} dispatch={dispatch} />))
          }
        </tbody>
      </table>
    </div>
    
  )
}

export default App;
