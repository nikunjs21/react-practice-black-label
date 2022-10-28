import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 0.8rem 1.8rem;
  margin: 10px 0;
  background: tomato;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

  &:hover{
    background: green;
  }
`;

export default Button;
