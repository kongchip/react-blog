import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['글제목1', '글제목2', '글제목3']);
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="navContainer">
        <h4>React Blog</h4>
      </div>

      <button
        onClick={() => {
          let titleSort = [...title];
          titleSort.sort();
          setTitle(titleSort);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = '맛집 추천';
          setTitle(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4>
          {title[0]}
          &nbsp; <span onClick={() => setGood(1)}>👍</span>
          {good}
        </h4>
        <p>4월 25일</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>4월 25일</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>4월 25일</p>
      </div>
    </div>
  );
}

export default App;
