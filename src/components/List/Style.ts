import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: pink;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  margin: 10px;
`;

const Btn = styled.button`
  width: 50px;
  height: 30px;
  margin: 10px;
  border-radius: 10px;
  padding: 0;
  border: 1px solid;
`;

const TodoList = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const Todo = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  margin: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: medium;
`;

const TodoItem = styled(InputContainer)`
  margin-top: 10px;
  border-radius: 10px;
  border: 3px dashed #fff;
`;

export { Container, InputContainer, Input, Btn, TodoList, Todo, TodoItem };
