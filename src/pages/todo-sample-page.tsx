import React, { useState } from 'react';
import TodoForm, {
	TodoFormState,
} from '../components/functions/todos/todo-form';
import TodoList from '../components/functions/todos/todo-list';
import { Todo } from '../components/functions/models/todo.model';

function TodoSamplePage() {
	// Eğer componentler birbirleri ile haberleşecek ise page üzerinden haberleşip state tanımını burada ortak olarak kullanırız.
	const [todos, setTodos] = useState<Todo[]>([]);
	// Not: üst component parent component child component bir state değiştrirmeden sorumlu ise bu durumda child component  parent componenti state props olarak alır.
	const [updateTodo, setUpdateTodo] = useState<TodoFormState>({
		title: '',
		completed: false,
		index: -1,
	});

	// Event Listener oldu
	const onItemChange = (item: TodoFormState) => {
		console.log('item-add-state', item);
		setTodos([item as Todo, ...todos]);
	};

	const onItemUpdateChange = (item: TodoFormState) => {
		
		todos.map((todo: Todo, index: number) => {
			if (index == item.index) {
				todo.title = item.title;
				todo.completed = item.completed as boolean;
			}
			return { todo };
		});

		setTodos([...todos]);
	};

	const onEdit = (item: TodoFormState) => {
		setUpdateTodo({ ...item });
		console.log('edit', item);
	};

	const onDelete = (index: number) => {
		todos.splice(index, 1);
		setTodos([...todos]);
	};

	const onCompleteChange = (index: number) => {
		const todo = todos[index];
		todo.completed = !todo.completed;

		setTodos([...todos]);
	};

	return (
		<>
			<TodoForm
				todoUpdate={updateTodo}
				onItemAdded={onItemChange}
				onItemUpdated={onItemUpdateChange}
			/>
			<div style={{ padding: '10px' }}>
				<TodoList
					todos={todos}
					onItemEdit={onEdit}
					onItemDelete={onDelete}
					onCompleteChange={onCompleteChange}
				/>
			</div>
		</>
	);
}

export default TodoSamplePage;
