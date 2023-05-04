import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['글제목1', '글제목2', '글제목3']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [newTitle, setNewTitle] = useState('');

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

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {title[i]}
              &nbsp;{' '}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] = copy[i] + 1;
                  setGood(copy);
                }}
              >
                👍
              </span>
              {good[i]}
            </h4>
            <p>4월 25일</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <div>
        <input
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let copy = [...title];
            copy.push(newTitle);
            setTitle(copy);
          }}
        >
          추가
        </button>
      </div>

      {modal === true ? <Modal title={title} setTitle={setTitle} modalTitle={modalTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.setTitle(['맛집 추천', '볼거리 추천', '해볼일 추천']);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
