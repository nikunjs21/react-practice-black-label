import React, { useImperativeHandle, useEffect } from "react";

const TodoForm = React.forwardRef((props, ref) => {
//   useImperativeHandle(ref, () => ({
//     resetAll: resetAllInput,
//   }));

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

  const resetAllInput = () => {
    console.log("Reset All");
    ref.current.value = "";
    setTodo("");
  };

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
      <input ref={ref} placeholder="ref input" onFocus={onFocusHandler} />
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
