import React, { useImperativeHandle, useEffect, useRef } from "react";

const TodoForm = React.forwardRef((props, ref) => {

  const newInputRef = useRef();

  const resetAllInput = () => {
    console.log("Reset All");
    newInputRef.current.value = "";
    setTodo("");
  };

  useImperativeHandle(ref, () => ({
    resetAll: resetAllInput,
    setRefInput: (val) => {
      newInputRef.current.value = val;
    }
  }));

    //TODO: fix imerativeHandle
    //TODO: useSelecter, useDispatch (redux)
    //TODO: contextAPI, redux, classbased components, 
    //TODO: http request, axios, fetch
    

  const { addTodo } = props;

  const [todo, setTodo] = React.useState("");

  useEffect(() => {
    // console.log(ref.current);
    // ref.current.value = "todo";
    console.log("Init or On Change of TODO");

    return () => {
        console.log('Clean Up');
    }

  }, [todo]);

  //   const token = "";

  const onTodoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    addTodo(todo);
  };

  const onFocusHandler = (e) => {
    // ref.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input ref={newInputRef} placeholder="ref input" onFocus={onFocusHandler} />
      <input
        placeholder="Add Todo"
        value={todo}
        onChange={onTodoChangeHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
});

export default TodoForm;
