import { atom } from 'recoil';

interface ToDoItem {
  id: number;
  text: string;
}

export const todoListState = atom<ToDoItem[]>({
  key: 'todoListState',
  default: [],
});
