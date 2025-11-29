// client/src/App.jsx
import React, { useEffect, useState } from 'react';
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { useY } from 'react-yjs';

const doc = new Y.Doc()
const wsProvider = new WebsocketProvider('ws://localhost:2329', 'my-roomname', doc)

wsProvider.on('status', event => {
  console.log(event.status) // logs "connected" or "disconnected"
})

const yTodos = doc.getArray("todos"); // <Y.Map<string | boolean>>


function App() {
  const todos = useY(yTodos)
  const [message, setMessage] = useState('');

  useEffect(() => {
    let base = `http://localhost:${Number(Number(process.env.PORT) + 1)}`
    fetch(`${base}/api/message`, {
      mode: 'cors'
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Vite React with Express</h1>
      <button onClick={() => {
        const newTodo = 'new todo name waha ' + todos.length
        // add a Todo
        const todo = new Y.Map();
        todo.set("id", crypto.randomUUID());
        todo.set("checked", false);
        todo.set("text", newTodo);
        yTodos.push([todo]);
      }}>Add one</button>
      {todos.map((r, i) => {
        return <div key={i + `${r.id || ''}`}>{r.text}
          <button onClick={() => {
            yTodos.delete(i)
          }}>Remove</button>
        </div>
      })}
      <p>{message}</p>
      <pre>{JSON.stringify(todos, null, '\t')}</pre>
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



