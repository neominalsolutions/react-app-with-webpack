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

	// Event Listener oldu
	const onItemChange = (item: TodoFormState) => {
		console.log('item-add-state', item);
		setTodos([item as Todo, ...todos]);
	};

	return (
		<>
			<TodoForm onItemAdded={onItemChange} onItemUpdated={() => {}} />
			<div style={{ padding: '10px' }}>
				<TodoList todos={todos} />
			</div>
		</>
	);
}

export default TodoSamplePage;
