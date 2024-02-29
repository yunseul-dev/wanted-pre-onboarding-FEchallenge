import { todoListState } from '../../store/atoms/todoListState';
import { useRecoilState } from 'recoil';
import { TodoList, TodoItem, Todo, Btn } from './Style';

type TodoItem = {
  id: number;
  text: string;
};

const Todos = () => {
  const [list, setList] = useRecoilState<TodoItem[]>(todoListState);

  const handleDeleteClick = (id: number) => {
    setList(prevList => prevList.filter(todo => todo.id !== id));
  };

  return (
    <TodoList>
      {list.map(todo => {
        return (
          <TodoItem key={todo.id}>
            <Todo> {todo.text}</Todo>
            <Btn onClick={() => handleDeleteClick(todo.id)}>Delete</Btn>
          </TodoItem>
        );
      })}
    </TodoList>
  );
};

export default Todos;
