import { useState } from "react";

const Login = (props) => {
  console.log(props);

  const { userName: defaultUserName, children } = props;

  const [userName, setUserName] = useState(defaultUserName);

  const onUsernameChangeHandler = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  return (
    <form>
      <input
        placeholder="Username"
        value={userName}
        onChange={onUsernameChangeHandler}
      />
      {children}
    </form>
  );
};

export default Login;
