import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center space-x-2">
          <Checkbox
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            {todo.text}
          </label>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => deleteTodo(todo.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
