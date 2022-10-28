import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import Login from "./login/Login";
import Sample from "./Sample";
const TodoApp = React.lazy(() => import("./todoapp"));

function App() {
  const userName = "Mayur";

  const inputRef = useRef();

  const Loader = <>
    {ReactDOM.createPortal(<h1>Loading...</h1>, document.getElementById("loader"))}
  </>;

  const onPasswordChangeHandler = (e) => {
    // console.log(e.target.value);
    console.log(inputRef.current.value);
  }

  return (
    <div className="App">
      <Suspense fallback={Loader}>
        <Routes>
          <Route
            path="/"
            element={
              <Login userName={userName}>
                <input placeholder="Password" ref={inputRef} onChange={onPasswordChangeHandler}  />
                <Link to="/sample">Go to sample</Link>
                <Link to="/todo">Go to Todo</Link>
                <Button type="button" onClick={() => {
                  inputRef.current.value = "HELLO@00000";
                }}>Generate Password</Button>
              </Login>
            }
          />
          <Route path="sample" element={<Sample />} />
          <Route path="todo" element={<TodoApp />} />
          <Route path="todo/:id" element={<TodoApp />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
