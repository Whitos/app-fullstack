import "../styles/app.scss";
import type { Todo } from "../types/Todo";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = () => {
  return <div>TodoList</div>;
};
export default TodoList;
