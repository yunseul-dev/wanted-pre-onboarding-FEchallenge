import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { todoListState } from '../../store/atoms/todoListState';
import { useSetRecoilState } from 'recoil';
import { InputContainer, Input, Btn } from './Style';

type TodoItem = {
  id: number;
  text: string;
};

const TodoInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const setList = useSetRecoilState<TodoItem[]>(todoListState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !inputValue) return;

    const newItem = {
      id: Date.now(),
      text: inputValue,
    };

    setList(prevList => [newItem, ...prevList]);

    setInputValue('');
  };

  const handleClick = () => {
    if (!inputValue) return;

    const newItem = {
      id: Date.now(),
      text: inputValue,
    };

    setList(prevList => [newItem, ...prevList]);

    setInputValue('');
  };

  return (
    <InputContainer>
      <Input
        placeholder="Enter todo!"
        autoFocus
        onChange={handleChange}
        onKeyUp={e => handleKeyUp(e)}
        value={inputValue}
      />
      <Btn onClick={handleClick}>Add</Btn>
    </InputContainer>
  );
};

export default TodoInput;
