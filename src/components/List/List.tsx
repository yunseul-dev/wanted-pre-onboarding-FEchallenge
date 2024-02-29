import { Container } from './Style';
import TodoInput from './TodoInput';
import Todos from './Todos';

const List = () => {
  return (
    <Container>
      <TodoInput />
      <Todos />
    </Container>
  );
};
export default List;
