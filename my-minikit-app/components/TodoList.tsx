import { useState } from "react";
import { Button, Card, Icon } from "@/components/common";

// TodoList のデータ型
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};


/**
 * TodoList コンポーネント
 * @returns 
 */
export function TodoList() {
  // 簡易的な Todo 管理（ローカル状態）
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn about MiniKit', completed: false },
    { id: 2, text: 'Build a Mini App', completed: true },
    { id: 3, text: 'Deploy to Base and go viral', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <Card title="Get started">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="flex-1 rounded-lg border border-[var(--app-card-border)] bg-[var(--app-card-bg)] px-3 py-2 text-[var(--app-foreground)] placeholder-[var(--app-foreground-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--app-accent)]"
          />
          <Button
            variant="primary"
            size="md"
            onClick={addTodo}
            icon={<Icon name="plus" size="sm" />}
          >
            Add
          </Button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  id={`todo-${todo.id}`}
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    todo.completed
                      ? 'border-[var(--app-accent)] bg-[var(--app-accent)]'
                      : 'border-[var(--app-foreground-muted)] bg-transparent'
                  }`}
                >
                  {todo.completed && (
                    <Icon name="check" size="sm" className="text-[var(--app-background)]" />
                  )}
                </button>
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`cursor-pointer text-[var(--app-foreground-muted)] ${todo.completed ? 'line-through opacity-70' : ''}`}
                >
                  {todo.text}
                </label>
              </div>
              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="text-[var(--app-foreground-muted)] hover:text-[var(--app-foreground)]"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
