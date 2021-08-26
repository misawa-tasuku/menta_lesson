import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () =>  {
  return (
    // JSXだとclassName
    <div className="container-fluid">
      <h4>TODO作成フォーム</h4> 
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="form-control" id="formEventTitle" />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <input type="form-control" id="formEventBody" />
        </div>
        <button className="btn btn-primary">TODO作成</button>
        <button className="btn btn-danger">全てのTODOを一括削除</button>
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
          
        </tbody>
      </table>
    </div>
    
  )
}

export default App;
